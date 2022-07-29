/**
 * ProcessMaker API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@processmaker.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EnvironmentVariableAllOf from './EnvironmentVariableAllOf';
import EnvironmentVariableEditable from './EnvironmentVariableEditable';

/**
 * The EnvironmentVariable model module.
 * @module model/EnvironmentVariable
 * @version 1.0.0
 */
class EnvironmentVariable {
    /**
     * Constructs a new <code>EnvironmentVariable</code>.
     * @alias module:model/EnvironmentVariable
     * @implements module:model/EnvironmentVariableAllOf
     * @implements module:model/EnvironmentVariableEditable
     */
    constructor() { 
        EnvironmentVariableAllOf.initialize(this);EnvironmentVariableEditable.initialize(this);
        EnvironmentVariable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnvironmentVariable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentVariable} obj Optional instance to populate.
     * @return {module:model/EnvironmentVariable} The populated <code>EnvironmentVariable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentVariable();
            EnvironmentVariableAllOf.constructFromObject(data, obj);
            EnvironmentVariableEditable.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
EnvironmentVariable.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
EnvironmentVariable.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
EnvironmentVariable.prototype['updated_at'] = undefined;

/**
 * @member {String} name
 */
EnvironmentVariable.prototype['name'] = undefined;

/**
 * @member {String} description
 */
EnvironmentVariable.prototype['description'] = undefined;

/**
 * @member {String} value
 */
EnvironmentVariable.prototype['value'] = undefined;


// Implement EnvironmentVariableAllOf interface:
/**
 * @member {Number} id
 */
EnvironmentVariableAllOf.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */
EnvironmentVariableAllOf.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */
EnvironmentVariableAllOf.prototype['updated_at'] = undefined;
// Implement EnvironmentVariableEditable interface:
/**
 * @member {String} name
 */
EnvironmentVariableEditable.prototype['name'] = undefined;
/**
 * @member {String} description
 */
EnvironmentVariableEditable.prototype['description'] = undefined;
/**
 * @member {String} value
 */
EnvironmentVariableEditable.prototype['value'] = undefined;




export default EnvironmentVariable;

