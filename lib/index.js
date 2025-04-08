/*!
 * Copyright (c) 2025 Digital Bazaar, Inc. All rights reserved.
 */
import {contexts} from '@digitalbazaar/vc-barcodes-context';
import {jsonLdDocumentLoader} from '@bedrock/jsonld-document-loader';

jsonLdDocumentLoader.addDocuments({documents: contexts});

export {contexts, metadata, named} from '@digitalbazaar/vc-barcodes-context';
