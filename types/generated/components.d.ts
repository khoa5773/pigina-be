import type { Schema, Struct } from '@strapi/strapi';

export interface AvxAvx extends Struct.ComponentSchema {
  collectionName: 'components_avx_avxes';
  info: {
    displayName: 'avx';
    icon: 'archive';
  };
  attributes: {
    avx: Schema.Attribute.Enumeration<['avx', 'abc']>;
  };
}

export interface TestTest extends Struct.ComponentSchema {
  collectionName: 'components_test_tests';
  info: {
    displayName: 'test';
    icon: 'alien';
  };
  attributes: {
    test: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'avx.avx': AvxAvx;
      'test.test': TestTest;
    }
  }
}
