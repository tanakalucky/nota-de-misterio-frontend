import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

/** @note vitestのバグでクリーンアップが自動でされないため手動で実行 */
/** @see https://github.com/vitest-dev/vitest/issues/1430 */
afterEach(() => {
  cleanup();
});
