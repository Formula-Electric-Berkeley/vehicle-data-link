import { addPageBanner } from 'app/AppWrapper';

import { TopBanner } from './TopBanner';

export async function initAnnouncementBanners() {
  addPageBanner(TopBanner);
}
