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
 * The GroupMembersEditable model module.
 * @module model/GroupMembersEditable
 * @version 1.0.0
 */
class GroupMembersEditable {
    /**
     * Constructs a new <code>GroupMembersEditable</code>.
     * @alias module:model/GroupMembersEditable
     */
    constructor() { 
        
        GroupMembersEditable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupMembersEditable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupMembersEditable} obj Optional instance to populate.
     * @return {module:model/GroupMembersEditable} The populated <code>GroupMembersEditable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupMembersEditable();

            if (data.hasOwnProperty('group_id')) {
                obj['group_id'] = ApiClient.convertToType(data['group_id'], 'String');
            }
            if (data.hasOwnProperty('member_id')) {
                obj['member_id'] = ApiClient.convertToType(data['member_id'], 'String');
            }
            if (data.hasOwnProperty('member_type')) {
                obj['member_type'] = ApiClient.convertToType(data['member_type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} group_id
 */
GroupMembersEditable.prototype['group_id'] = undefined;

/**
 * @member {String} member_id
 */
GroupMembersEditable.prototype['member_id'] = undefined;

/**
 * @member {String} member_type
 */
GroupMembersEditable.prototype['member_type'] = undefined;

/**
 * @member {String} description
 */
GroupMembersEditable.prototype['description'] = undefined;






export default GroupMembersEditable;

