globalThis.currentConfigVersion="1.0-1";

globalThis.defaultSidebarMenu=[
    {action: 'navigate', navigation_path: '/dashboard-tablet', name: 'Home', active: true},    
    {action: 'navigate', navigation_path: '/dashboard-cameras', name: 'Cameras', active: true},
    {action: 'navigate', navigation_path: '/dashboard-lights', name: 'Lights', active: true},
    {action: 'navigate', navigation_path: '/dashboard-security', name: 'Security', active: true},
    {action: 'navigate', navigation_path: '/dashboard-floorplan', name: 'Floorplan', active: true},
    {action: 'navigate', navigation_path: '/dashboard-temperatures', name: 'Temperatures', active: true},
    {action: 'navigate', navigation_path: '/dashboard-health', name: 'Health', active: true},
];

globalThis.animatedBackground=[];

console.info(`%c LOADED CURRENT VERSION: `+globalThis.currentConfigVersion+` %c`,'color: chartreuse; background: black; font-weight: 700;', 'color: white; background: dimgrey; font-weight: 700;');