import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticleArticles extends Schema.Component {
  collectionName: 'components_article_articles';
  info: {
    displayName: 'Articles';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    title_th: Attribute.String;
    author_th: Attribute.String;
    url: Attribute.String;
    author_en: Attribute.String;
    download: Attribute.Integer;
    keywords: Attribute.String;
  };
}

export interface ButtonButton extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'Button';
    icon: 'arrowDown';
  };
  attributes: {
    download_word: Attribute.String;
    download_pdf: Attribute.String;
    url: Attribute.Media;
  };
}

export interface JournalJournal extends Schema.Component {
  collectionName: 'components_journal_journals';
  info: {
    displayName: 'Journal';
    description: '';
  };
  attributes: {
    published_date: Attribute.Date;
    volumn: Attribute.String;
    number: Attribute.String;
    months: Attribute.Enumeration<
      [
        'January - March',
        'April - June',
        'July - September',
        'October - December'
      ]
    >;
    uploadfiles: Attribute.Media;
    year: Attribute.String;
    isn: Attribute.Text;
    months_th: Attribute.Enumeration<
      [
        'January | \u0E21\u0E01\u0E23\u0E32\u0E04\u0E21 - \u0E21\u0E35\u0E19\u0E32\u0E04\u0E21',
        'April | \u0E40\u0E21\u0E29\u0E32\u0E22\u0E19 - \u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19',
        'July | \u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21 - \u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19',
        'October | \u0E15\u0E38\u0E25\u0E32\u0E04\u0E21 - \u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21'
      ]
    >;
  };
}

export interface RoleRoles extends Schema.Component {
  collectionName: 'components_role_roles';
  info: {
    displayName: 'Roles';
    description: '';
  };
  attributes: {
    header_role: Attribute.String;
    content_markdown_en: Attribute.RichText;
    content_markdown_th: Attribute.RichText;
    header_role_th: Attribute.String;
  };
}

export interface SubscriptionSubscription extends Schema.Component {
  collectionName: 'components_subscription_subscriptions';
  info: {
    displayName: 'Subscription';
    description: '';
  };
  attributes: {
    content_th_1: Attribute.Text;
    content_th_2: Attribute.Text;
    download_th: Attribute.String;
    url: Attribute.String;
    uploadfile: Attribute.Media;
  };
}

export interface TableTable extends Schema.Component {
  collectionName: 'components_table_tables';
  info: {
    displayName: 'Table';
    icon: 'grid';
  };
  attributes: {
    guideline_en: Attribute.RichText;
    guideline_th: Attribute.RichText;
  };
}

export interface YearYears extends Schema.Component {
  collectionName: 'components_year_years';
  info: {
    displayName: 'years';
  };
  attributes: {
    name_en: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'article.articles': ArticleArticles;
      'button.button': ButtonButton;
      'journal.journal': JournalJournal;
      'role.roles': RoleRoles;
      'subscription.subscription': SubscriptionSubscription;
      'table.table': TableTable;
      'year.years': YearYears;
    }
  }
}
