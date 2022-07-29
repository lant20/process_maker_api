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

/**
 * The GroupsAllOf model module.
 * @module model/GroupsAllOf
 * @version 1.0.0
 */
class GroupsAllOf {
    /**
     * Constructs a new <code>GroupsAllOf</code>.
     * @alias module:model/GroupsAllOf
     */
    constructor() { 
        
        GroupsAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupsAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupsAllOf} obj Optional instance to populate.
     * @return {module:model/GroupsAllOf} The populated <code>GroupsAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupsAllOf();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} created_at
 */
GroupsAllOf.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
GroupsAllOf.prototype['updated_at'] = undefined;

/**
 * @member {String} id
 */
GroupsAllOf.prototype['id'] = undefined;






export default GroupsAllOf;

