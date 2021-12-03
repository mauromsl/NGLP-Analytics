from unittest import TestCase
from nglptest.fixtures.normalise import NormaliseFixtureFactory
from nglp.pipeline.normalise import Normalise
from copy import deepcopy
from nglp.models import events


class TestNormalise(TestCase):

    # To change tests:
    # What has changed?
    # How does that affect the current tests?
    # How do I need to change the tests to work again?

    def test_01_broken_doi_id(self):
        # broken_doi_id can't be normalised, so it should be returned unchanged.
        request = NormaliseFixtureFactory.broken_doi_id()
        request2 = deepcopy(request)

        object = events.PipelineEvent(raw=request)

        self.assertEqual(Normalise().run(event=object).object_ids, request2["object_id"])


    def test_02_broken_issn_id(self):
        # broken_issn_id can't be normalised, so it should be returned unchanged.
        request = NormaliseFixtureFactory.broken_issn_id()
        request2 = deepcopy(request)

        object = events.PipelineEvent(raw=request)

        self.assertEqual(Normalise().run(event=object).object_ids, request2["object_id"])

    def test_09_broken_handle_id(self):
        # broken_handle_id can't be normalised, so it should be returned unchanged.
        request = NormaliseFixtureFactory.broken_handle_id()
        request2 = deepcopy(request)

        object = events.PipelineEvent(raw=request)

        self.assertEqual(Normalise().run(event=object).object_ids, request2["object_id"])

    def test_10_broken_http_url_id(self):
        # broken_http_url_id can't be normalised, so it should be returned unchanged.
        request = NormaliseFixtureFactory.broken_http_url_id()
        request2 = deepcopy(request)

        object = events.PipelineEvent(raw=request)

        self.assertEqual(Normalise().run(event=object).object_ids, request2["object_id"])

    def test_03_single_doi_id(self):
        request = NormaliseFixtureFactory.single_doi_id()
        request2 = deepcopy(request)
        object = events.PipelineEvent(raw=request)
        request2["object_id"] = ["10.1109/5.771073"]

        self.assertEqual(Normalise().run(event=object).object_ids, request2["object_id"])

    def test_04_multiple_doi_id(self):
        request = NormaliseFixtureFactory.multiple_doi_id()
        request2 = deepcopy(request)
        object = events.PipelineEvent(raw=request)
        request2["object_id"] = [
        "10.1000/j.1541-1338.2004.00081.x",
        "10.10002/ctpp.201400073",
        "10.1001/2012.jama.10159",
        ]

        self.assertEqual(Normalise().run(event=object).object_ids, request2["object_id"])

    def test_05_handle_id(self):
        request = NormaliseFixtureFactory.multiple_handle_id()
        request2 = deepcopy(request)
        object = events.PipelineEvent(raw=request)
        request2["object_id"] = [
            "11.1234/xxxx",
            "30.1234/bla/blaaaa",
            "20.4567/someotherstuffhere",
        ]

        self.assertEqual(Normalise().run(event=object).object_ids, request2["object_id"])

    def test_06_issn_id(self):
        request = NormaliseFixtureFactory.multiple_issn_id()
        request2 = deepcopy(request)
        object = events.PipelineEvent(raw=request)
        request2["object_id"] = [
            "2624-599X",
            "2076-3387",
            "2218-273X",
        ]

        self.assertEqual(Normalise().run(event=object).object_ids, request2["object_id"])

    def test_07_http_url_id(self):
        request = NormaliseFixtureFactory.multiple_http_id()
        request2 = deepcopy(request)
        object = events.PipelineEvent(raw=request)
        request2["object_id"] = [
            "en.wikipedia.org/wiki/Handle_System",
            "docs.google.com/document/d/1aa02icZyr6a-qtD6pxR-lw84p2yLHlYAY/edit#",
            "www.etsy.com/uk/listing/896635620/baby-muslin-comforters-gift-set-new-baby?ref=hp_prn-4&frs=1&bes=1",
        ]

        self.assertEqual(Normalise().run(event=object).object_ids, request2["object_id"])

    def test_08_mix_id(self):
        request = NormaliseFixtureFactory.multiple_mix_id()
        request2 = deepcopy(request)
        object = events.PipelineEvent(raw=request)
        request2["object_id"] = [
            "en.wikipedia.org/wiki/Handle_System",
            "10.1000/j.1541-1338.2004.00081.x",
            "2624-599X",
            "20.4567/someotherstuffhere",
        ]

        self.assertEqual(Normalise().run(event=object).object_ids, request2["object_id"])




if __name__ == "__main__":
    unittest.main()