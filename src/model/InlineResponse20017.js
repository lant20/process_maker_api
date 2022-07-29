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
import Screens from './Screens';

/**
 * The InlineResponse20017 model module.
 * @module model/InlineResponse20017
 * @version 1.0.0
 */
class InlineResponse20017 {
    /**
     * Constructs a new <code>InlineResponse20017</code>.
     * @alias module:model/InlineResponse20017
     */
    constructor() { 
        
        InlineResponse20017.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20017</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20017} obj Optional instance to populate.
     * @return {module:model/InlineResponse20017} The populated <code>InlineResponse20017</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20017();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Screens]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Screens>} data
 */
InlineResponse20017.prototype['data'] = undefined;

/**
 * @member {Object} meta
 */
InlineResponse20017.prototype['meta'] = undefined;






export default InlineResponse20017;

