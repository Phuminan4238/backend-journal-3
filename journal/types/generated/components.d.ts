import type { Schema, Attribute } from '@strapi/strapi';

export interface JournalJournal extends Schema.Component {
  collectionName: 'components_journal_journals';
  info: {
    displayName: 'Journal';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    author: Attribute.String;
    url: Attribute.String;
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
    tags: Attribute.Relation<'journal.journal', 'oneToMany', 'api::tag.tag'>;
    uploadfiles: Attribute.Media;
    year: Attribute.String;
    isn: Attribute.Text;
    title_markdown: Attribute.RichText;
    title_th: Attribute.String;
    title_markdown_th: Attribute.RichText;
    months_th: Attribute.Enumeration<['month']>;
    month: Attribute.String;
    month_th: Attribute.String;
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
    content_role: Attribute.Text;
    content_markdown_en: Attribute.RichText;
    content_markdown_th: Attribute.RichText;
    header_role_th: Attribute.String;
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
      'journal.journal': JournalJournal;
      'role.roles': RoleRoles;
      'year.years': YearYears;
    }
  }
}
