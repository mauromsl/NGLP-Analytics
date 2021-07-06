from setuptools import setup, find_packages

setup(
    name='nglp',
    version='1.0.0',
    packages=find_packages(),
    install_requires=[
        'Faker~=8.1.2',
        'faker-web==0.3.1',
        'click~=7.1.2',
        'elasticsearch>=7.0.0,<8.0.0',
        'fastapi==0.65.2',
        'pydantic==1.8.2',
        'python-dotenv==0.17.1',
        'requests==2.25.1',
        'jinja2==3.0.1',
        'aiofiles==0.7.0',
        'uvicorn==0.14.0'
    ],
    url='http://cottagelabs.com/',
    author='Cottage Labs',
    author_email='us@cottagelabs.com',
    description='NGLP Analytics',
    license='Apache 2.0',
    classifiers=[]
)
