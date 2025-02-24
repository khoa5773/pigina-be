import type { Schema, Struct } from '@strapi/strapi';

export interface InputAddLinkPreview extends Struct.ComponentSchema {
  collectionName: 'components_input_add_link_previews';
  info: {
    description: '';
    displayName: 'preview';
    icon: 'link';
  };
  attributes: {
    link: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'input-add-link.preview': InputAddLinkPreview;
    }
  }
}
