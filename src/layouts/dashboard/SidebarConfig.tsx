import { PATH_DASHBOARD } from "src/routes/paths";
import SvgIconStyle from "src/components/SvgIconStyle";

const getIcon = (name:string) => (
  <SvgIconStyle
    src={`/static/icons/navbar/${name}.svg`}
    sx={{ width: "100%", height: "100%" }}
  />
);

const ICONS = {
  user: getIcon("ic_user"),
  ecommerce: getIcon("ic_ecommerce"),
  analytics: getIcon("ic_analytics"),
  dashboard: getIcon("ic_dashboard"),
};

const sidebarConfig = [
  {
    subheader: "全部",
    items: [
      {
        title: "页面1",
        path: PATH_DASHBOARD.general.pageOne,
        icon: ICONS.dashboard,
      },
      {
        title: "页面2",
        path: PATH_DASHBOARD.general.pageTwo,
        icon: ICONS.ecommerce,
      },
      {
        title: "页面3",
        path: PATH_DASHBOARD.general.pageThree,
        icon: ICONS.analytics,
      },
    ],
  },
  {
    subheader: "管理",
    items: [
      {
        title: "用户",
        path: PATH_DASHBOARD.app.root,
        icon: ICONS.user,
        children: [
          { title: "页面4", path: PATH_DASHBOARD.app.pageFour },
          { title: "页面5", path: PATH_DASHBOARD.app.pageFive },
          { title: "页面6", path: PATH_DASHBOARD.app.pageSix },
        ],
      },
    ],
  },
];

export default sidebarConfig;
