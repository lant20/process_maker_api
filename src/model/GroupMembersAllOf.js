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
 * The GroupMembersAllOf model module.
 * @module model/GroupMembersAllOf
 * @version 1.0.0
 */
class GroupMembersAllOf {
    /**
     * Constructs a new <code>GroupMembersAllOf</code>.
     * @alias module:model/GroupMembersAllOf
     */
    constructor() { 
        
        GroupMembersAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupMembersAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupMembersAllOf} obj Optional instance to populate.
     * @return {module:model/GroupMembersAllOf} The populated <code>GroupMembersAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupMembersAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
GroupMembersAllOf.prototype['id'] = undefined;

/**
 * @member {Date} created_at
 */
GroupMembersAllOf.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
GroupMembersAllOf.prototype['updated_at'] = undefined;






export default GroupMembersAllOf;

