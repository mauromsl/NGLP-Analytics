import sass
import os
import shutil

from datetime import datetime

# SASS directory
SASS = os.path.join("..", "js", "sass")

# Output style
STYLE = "compressed"

# SASS and error file for the main CSS
MAIN_SETTINGS = [
    (os.path.join(SASS, "g001.scss"),os.path.join("static", "css", "g001.css"), os.path.join("..", "error_sass.txt")),
    (os.path.join(SASS, "g014.scss"),os.path.join("static", "css", "g014.css"), os.path.join("..", "error_sass.txt"))
]


def _localise_paths(paths, base_path=None):
    SCSS_IN, CSS_OUT, ERROR_OUT = paths
    SOURCE_MAP = CSS_OUT + ".map"

    now = datetime.utcnow().timestamp()
    if base_path is None:
        return SASS, SCSS_IN, CSS_OUT, CSS_OUT + "." + str(now), SOURCE_MAP, SOURCE_MAP + "." + str(now), ERROR_OUT
    return (os.path.join(base_path, SASS),
            os.path.join(base_path, SCSS_IN),
            os.path.join(base_path, CSS_OUT),
            os.path.join(base_path, CSS_OUT + "." + str(now)),
            os.path.join(base_path, SOURCE_MAP),
            os.path.join(base_path, SOURCE_MAP + "." + str(now)),
            os.path.join(base_path, ERROR_OUT))


def _swap(old, new):
    if os.path.exists(old):
        os.rename(old, old + ".old")
    os.rename(new, old)
    if os.path.exists(old + ".old"):
        try:
            shutil.rmtree(old + ".old")
        except OSError:
            os.remove(old + ".old")


def build(paths, base_path=None):
    sass_file, main_file, css_file, css_tmp, map_file, map_tmp, error_file = None, None, None, None, None, None, None
    try:
        sass_file, main_file, css_file, css_tmp, map_file, map_tmp, error_file = _localise_paths(paths, base_path)

        css, src_map = sass.compile(filename=main_file,
                     output_style=STYLE,
                     source_map_filename=map_file,
                     include_paths=[sass_file],
                     omit_source_map_url=True)

        # Enable the following line to add the sourcemap URL, since it was being generated incorrectly. Requires serving /cms/sass in STATIC_PATHS
        # css += f'\n/*# sourceMappingURL={os.path.basename(map_file)} */'

        with open(css_tmp, "w") as f:
            f.write(css)

        with open(map_tmp, "w") as f:
            f.write(src_map)

        _swap(css_file, css_tmp)
        _swap(map_file, map_tmp)

    except Exception as e:
        try:
            print("Error occurred building sass")
            if error_file:
                with open(error_file, "w") as f:
                    f.write(str(e))

            if css_tmp and os.path.exists(css_tmp):
                os.remove(css_tmp)

            if css_file and os.path.exists(css_file + ".old"):
                os.rename(css_file + ".old", css_file)

            if map_tmp and os.path.exists(map_tmp):
                os.remove(map_tmp)

            if map_file and os.path.exists(map_file + ".old"):
                os.rename(map_file + ".old", map_file)

            raise e

        except:
            print("Error occurred building sass and could not complete cleanup")
            raise e


if __name__ == "__main__":
    # Build the site CSS
    for settings in MAIN_SETTINGS:
        build(settings)
