
import { Logger } from "@aws-lambda-powertools/logger";

/**
 * @typedef { import('@types/aws-lambda') }
 * @typedef { import('@aws-sdk/client-dynamodb') }
 * @typedef { import('@aws-sdk/lib-dynamodb') }
 * @typedef { import('./order') }
 */

const logger = new Logger();


/**
 * Main handler.
 * @param {import("@types/aws-lambda").EventBridgeEvent<Order>} event 
 * @param {import("aws-lambda/handler").Context} _ 
 */
exports.handler = async(event, _) => {
  logger.debug(event);

  // implement me!
};
