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
 * The RestoreUser model module.
 * @module model/RestoreUser
 * @version 1.0.0
 */
class RestoreUser {
    /**
     * Constructs a new <code>RestoreUser</code>.
     * Reverses the soft delete of a user
     * @alias module:model/RestoreUser
     */
    constructor() { 
        
        RestoreUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestoreUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestoreUser} obj Optional instance to populate.
     * @return {module:model/RestoreUser} The populated <code>RestoreUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestoreUser();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Username to restore
 * @member {String} username
 */
RestoreUser.prototype['username'] = undefined;






export default RestoreUser;

