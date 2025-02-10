export default async function (page: string) {
  const { t } = useI18n();

  useSeoMeta({
    title: t(`${page}.meta.title`),
    ogTitle: t(`${page}.meta.title`),
    twitterTitle: t(`${page}.meta.title`),
    twitterDescription: t(`${page}.meta.description`),
    description: t(`${page}.meta.description`),
    ogDescription: t(`${page}.meta.description`),
  });
}
