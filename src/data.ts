export const mis = {
  program: { id: 'coastal-resilience', name: 'Coastal Resilience Program', code: 'CRP', period: '2024–2028', status: 'Active', description: 'Strengthening coastal ecosystems and the communities that depend on them across priority landscapes.' },
  project: { id: 'mangrove-restoration', name: 'Mangrove Restoration & Community Resilience', code: 'CRP–01', lead: 'Coastal Programs Team', period: '2025–2027' },
  landscape: { id: 'south-sulawesi', name: 'South Sulawesi Coastal Landscape', province: 'South Sulawesi, Indonesia' },
  outcome: 'Coastal ecosystem condition improved',
  output: 'Mangrove habitat restored and monitored',
  reportingPeriod: '2026',
  indicators: [
    { id: 'mangrove-rehabilitation', name: 'Mangrove rehabilitation area', code: 'CRP.O1.01', unit: 'ha', baseline: 120, target: 300, achievement: 218, progress: 72.7, status: 'On track', trend: [120, 138, 157, 181, 198, 218], description: 'Area of mangrove habitat rehabilitated across project sites.' },
    { id: 'mangrove-survival', name: 'Mangrove survival rate', code: 'CRP.O1.02', unit: '%', baseline: 71, target: 85, achievement: 86, progress: 101.2, status: 'On track', trend: [71, 74, 76, 79, 83, 86], description: 'Share of planted mangroves surviving during monitoring.' },
    { id: 'community-monitoring', name: 'Community monitoring groups active', code: 'CRP.O2.01', unit: 'groups', baseline: 2, target: 12, achievement: 8, progress: 66.7, status: 'Needs attention', trend: [2, 3, 4, 5, 7, 8], description: 'Community groups regularly conducting site monitoring.' },
    { id: 'households-engaged', name: 'Coastal households engaged', code: 'CRP.O2.02', unit: 'households', baseline: 80, target: 650, achievement: 482, progress: 74.2, status: 'On track', trend: [80, 145, 220, 304, 391, 482], description: 'Households participating in restoration and resilience activities.' }
  ],
  sites: [
    { id: 'site-a', name: 'Site A', subtitle: 'Coastal Restoration Area', coordinates: '5.181° S, 119.382° E', progress: 78, activities: 4, beneficiaries: 186, evidence: 24, x: 28, y: 49, area: 96, status: 'On track' },
    { id: 'site-b', name: 'Site B', subtitle: 'Community Mangrove Area', coordinates: '5.226° S, 119.418° E', progress: 68, activities: 3, beneficiaries: 174, evidence: 18, x: 57, y: 29, area: 73, status: 'Needs attention' },
    { id: 'site-c', name: 'Site C', subtitle: 'Monitoring Zone', coordinates: '5.274° S, 119.461° E', progress: 62, activities: 2, beneficiaries: 122, evidence: 13, x: 72, y: 66, area: 49, status: 'Monitoring' }
  ],
  evidence: [
    { id: 'ev-01', name: 'Field Survey — Site A.pdf', type: 'PDF', date: '18 Aug 2026', size: '2.4 MB', siteId: 'site-a', status: 'Pending Review', icon: 'document' },
    { id: 'ev-02', name: 'Monitoring Photo — August 2026.jpg', type: 'JPG', date: '18 Aug 2026', size: '4.8 MB', siteId: 'site-a', status: 'Pending Review', icon: 'image' },
    { id: 'ev-03', name: 'Site Boundary — Site A.geojson', type: 'GEOJSON', date: '17 Aug 2026', size: '184 KB', siteId: 'site-a', status: 'Verified', icon: 'map' },
    { id: 'ev-04', name: 'Community Monitoring Report.pdf', type: 'PDF', date: '14 Aug 2026', size: '1.6 MB', siteId: 'site-b', status: 'Revision Requested', icon: 'document' }
  ],
  activities: [
    { name: 'Community planting and restoration', siteId: 'site-a', date: '12 Aug 2026', beneficiaries: 86, status: 'Completed' },
    { name: 'Seedling survival monitoring', siteId: 'site-a', date: '18 Aug 2026', beneficiaries: 24, status: 'Submitted' },
    { name: 'Community monitoring training', siteId: 'site-b', date: '09 Aug 2026', beneficiaries: 42, status: 'Completed' },
    { name: 'Coastal transect survey', siteId: 'site-c', date: '21 Aug 2026', beneficiaries: 18, status: 'Planned' }
  ],
  submission: { id: 'SUB-2026-084', by: 'Ayu Rahmawati', role: 'Field Coordinator', date: '19 Aug 2026', siteId: 'site-a', achievement: 218, period: '2026', status: 'Pending KMEL Review' },
  learning: [
    { title: 'Early community stewardship improves seedling survival', type: 'Learning note', date: '12 Aug 2026' },
    { title: 'Prioritize tidal channels during Site B maintenance', type: 'Management action', date: '05 Aug 2026' }
  ]
} as const;

export type Site = typeof mis.sites[number];
export type Indicator = typeof mis.indicators[number];
