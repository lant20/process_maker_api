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
 * The InlineResponse201 model module.
 * @module model/InlineResponse201
 * @version 1.0.0
 */
class InlineResponse201 {
    /**
     * Constructs a new <code>InlineResponse201</code>.
     * @alias module:model/InlineResponse201
     */
    constructor() { 
        
        InlineResponse201.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse201</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse201} obj Optional instance to populate.
     * @return {module:model/InlineResponse201} The populated <code>InlineResponse201</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse201();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Object} status
 */
InlineResponse201.prototype['status'] = undefined;






export default InlineResponse201;

