import { env } from './utils/env';
import { logger } from './utils/logger';
import { startTime } from './utils/time';

logger.info('ENV:', env);

/**
 * ```bash
 * pnpm test:log
 * ```
 */
const main = async () => {
  logger.info('🌱 Start script!', startTime.toISOString());

  try {
    logger.info('try');
  } finally {
    // Ensures that the client will close when you finish/error
    logger.info('finally');
  }

  logger.info('------------------');

  logger.info('🌳 End script!', new Date().toISOString());
};

main().catch(async (err) => {
  console.error('error:', err);
  process.exit(1);
});
