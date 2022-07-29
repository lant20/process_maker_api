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
 * The InlineResponse20015 model module.
 * @module model/InlineResponse20015
 * @version 1.0.0
 */
class InlineResponse20015 {
    /**
     * Constructs a new <code>InlineResponse20015</code>.
     * @alias module:model/InlineResponse20015
     */
    constructor() { 
        
        InlineResponse20015.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20015</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20015} obj Optional instance to populate.
     * @return {module:model/InlineResponse20015} The populated <code>InlineResponse20015</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20015();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('fileUploadId')) {
                obj['fileUploadId'] = ApiClient.convertToType(data['fileUploadId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} message
 */
InlineResponse20015.prototype['message'] = undefined;

/**
 * @member {Number} fileUploadId
 */
InlineResponse20015.prototype['fileUploadId'] = undefined;






export default InlineResponse20015;

