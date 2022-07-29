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
import SecurityLog from './SecurityLog';

/**
 * The InlineResponse20024 model module.
 * @module model/InlineResponse20024
 * @version 1.0.0
 */
class InlineResponse20024 {
    /**
     * Constructs a new <code>InlineResponse20024</code>.
     * @alias module:model/InlineResponse20024
     */
    constructor() { 
        
        InlineResponse20024.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20024</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20024} obj Optional instance to populate.
     * @return {module:model/InlineResponse20024} The populated <code>InlineResponse20024</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20024();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [SecurityLog]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/SecurityLog>} data
 */
InlineResponse20024.prototype['data'] = undefined;

/**
 * @member {Object} meta
 */
InlineResponse20024.prototype['meta'] = undefined;






export default InlineResponse20024;

