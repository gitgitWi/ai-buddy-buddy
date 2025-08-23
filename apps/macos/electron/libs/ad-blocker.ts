import { ElectronBlocker } from '@ghostery/adblocker-electron';
import type { Session } from 'electron';

export const initAdBlocker = async (session: Session) => {
  const blocker = await ElectronBlocker.fromPrebuiltAdsAndTracking(fetch);

  blocker.enableBlockingInSession(session);
  blocker.on('request-blocked', (request) => {
    console.log('[Ad Blocker] Blocked:', request.url);
  });

  return blocker;
};
