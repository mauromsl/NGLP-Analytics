from unittest import TestCase
from nglptest.fixtures.reporting_context import ReportingContextFixtureFactory
from nglp.models import reporting_context


class TestReportingContext(TestCase):
    def test_01_publisher(self):
        source = ReportingContextFixtureFactory.publisher()
        publisher = reporting_context.ReportingContextFactory.make(source)
        assert isinstance(publisher, reporting_context.Publisher)
        publisher.save()

        saved_record = reporting_context.Publisher.pull(publisher.id)
        assert saved_record is not None

    def test_02_journal(self):
        source = ReportingContextFixtureFactory.journal()
        journal = reporting_context.ReportingContextFactory.make(source)
        assert isinstance(journal, reporting_context.Journal)
        journal.save()

        saved_record = reporting_context.Journal.pull(journal.id)
        assert saved_record is not None

    def test_03_issue(self):
        source = ReportingContextFixtureFactory.issue()
        issue = reporting_context.ReportingContextFactory.make(source)
        assert isinstance(issue, reporting_context.Issue)
        issue.save()

        saved_record = reporting_context.Issue.pull(issue.id)
        assert saved_record is not None

    def test_04_article(self):
        source = ReportingContextFixtureFactory.article()
        article = reporting_context.ReportingContextFactory.make(source)
        assert isinstance(article, reporting_context.Article)
        article.save()

        saved_record = reporting_context.Article.pull(article.id)
        assert saved_record is not None

    def test_05_author(self):
        source = ReportingContextFixtureFactory.author()
        author = reporting_context.ReportingContextFactory.make(source)
        assert isinstance(author, reporting_context.Author)
        author.save()

        saved_record = reporting_context.Author.pull(author.id)
        assert saved_record is not None

    def test_06_user(self):
        source = ReportingContextFixtureFactory.user()
        user = reporting_context.ReportingContextFactory.make(source)
        assert isinstance(user, reporting_context.User)
        user.save()

        saved_record = reporting_context.User.pull(user.id)
        assert saved_record is not None

    def test_07_generic_container(self):
        source = ReportingContextFixtureFactory.generic_container()
        gc = reporting_context.ReportingContextFactory.make(source)
        assert isinstance(gc, reporting_context.GenericContainer)
        gc.save()

        saved_record = reporting_context.GenericContainer.pull(gc.id)
        assert saved_record is not None

    def test_08_organisation(self):
        source = ReportingContextFixtureFactory.organisation()
        org = reporting_context.ReportingContextFactory.make(source)
        assert isinstance(org, reporting_context.Organisation)
        org.save()

        saved_record = reporting_context.Organisation.pull(org.id)
        assert saved_record is not None