'use strict'

exports.getEnums = () => {
  return {
    GENERAL: {
      APP_NAME: 'Groupio'
    },
    COLLECTIONS: {
      USERS: {
        NAME: 'users'
      },
      CHATS: {
        NAME: 'chats'
      }
    },
    STATUS_CODES: {
      SUCCESS: 200,
      ERROR: 400,
      UNAUTHORIZED: 401
    },
    VALUES: {
      NULL: null,
      ZERO_NUMBER: 0,
      EMPTY_STRING: '',
      EMPTY_OBJECT: {},
      EMPTY_ARRAY: []
    },
    CONTENT_TYPES: {
      TEXT: 'text/plain',
      JSON: 'application/json',
      OCTET_STREAM: 'application/octet-stream',
      MULTIPART_FORM_DATA: 'multipart/form-data'
    },
    BOOLEAN: {
      TRUE: true,
      FALSE: false
    },
    CHAT_TYPES: {
      DIRECT: 'direct',
      GROUP: 'group',
      GROUPED_GROUP: 'grouped-group'
    },
    TRANSACTIONAL_INFO_PROPS: {
      MODIFIED: 'modified',
      CREATED: 'created',
      BOTH: 'both'
    },
    ENDPOINTS: {
      USER: {
        CRUD: '/user/crud'
      },
      CHAT: {
        CRUD: '/chat/crud'
      }
    },
    METHODS: {
      CREATE: 'create',
      READ: 'read',
      UPDATE: 'update',
      DELETE: 'delete'
    },
    MONGOOSE: {
      CONNECTION: {
        STATUSES: {
          CONNECTED: 'connected',
          ERROR: 'error',
          DISCONNECTED: 'disconnected'
        },
        MESSAGES: {
          CONNECTED: 'Mongoose default connection is open',
          ERROR: 'Error with Mongoose default connection occurred: \n',
          DISCONNECTED: 'Mongoose default connection has been disconnected',
          TERMINATED: 'Mongoose default connection has been terminated due to the application being terminated'
        }
      },
      DUPLICATE_KEY: 'A user already exists with that email/cell number/username'
    },
    DATA_TYPES: {
      NULL: '[object Null]',
      UNDEFINED: '[object Undefined]',
      BOOLEAN: '[object Boolean]',
      NUMBER: '[object Number]',
      STRING: '[object String]',
      OBJECT: '[object Object]',
      ARRAY: '[object Array]',
      DATE: '[object Date]',
      FUNCTION: '[object Function]',
      REGEX: '[object RegExp]'
    }
  }
}
