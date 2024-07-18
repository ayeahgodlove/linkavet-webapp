import {
  TbCalendarEvent,
  TbCategoryPlus,
  TbMessage,
  TbPlugConnected,
  TbTags,
} from "react-icons/tb";
import { AiFillContacts } from "react-icons/ai";
import { GrDashboard } from "react-icons/gr";
import {
  MdMedicalServices,
  MdOutlineInventory,
  MdOutlineLibraryBooks,
  MdProductionQuantityLimits,
} from "react-icons/md";
import {
  RiAccountCircleLine,
  RiCustomerService2Fill,
  RiUserSettingsLine,
  RiUserStarFill,
} from "react-icons/ri";
import { FcApprove, FcCalendar, FcSalesPerformance } from "react-icons/fc";
import {
  FiFileText,
  FiMessageCircle,
  FiPenTool,
  FiUsers,
  FiUserX,
} from "react-icons/fi";
import { CommentOutlined } from "@ant-design/icons";
import { SiAmazonsimpleemailservice, SiGoogleclassroom } from "react-icons/si";
import { BiSolidDashboard } from "react-icons/bi";
import { TfiGallery } from "react-icons/tfi";
import { ROLES } from "@constants/constant";

export const useDashboardMenu = () => {
  function filterMenuItemsByRole(items: any["items"], userRoles: string[]) {
    return items
      .filter((item: any) => item.roles.some((r: any) => userRoles.includes(r)))
      .map((item: any) => {
        if (item.children) {
          return {
            ...item,
            children: filterMenuItemsByRole(item.children, userRoles),
          };
        }
        return item;
      });
  }

  const dashboardMenus = [
    {
      name: "dashboard",
      list: "/dashboard",
      icon: <GrDashboard />,
      roles: [
        ROLES.ADMIN,
        ROLES.PETOWNER,
        ROLES.DOCTOR,
        ROLES.TRAINER,
        ROLES.CREATOR,
      ],
    },
    // settings
    {
      name: "settings",
      meta: {
        canDelete: true,
        label: "Settings",
      },
      icon: <MdProductionQuantityLimits />,
      roles: [ROLES.ADMIN],
    },
    {
      name: "roles",
      list: "/dashboard/settings/roles",
      create: "/dashboard/settings/roles/create",
      edit: "/dashboard/settings/roles/edit/:id",
      show: "/dashboard/settings/roles/show/:id",
      parentName: "settings",
      meta: {
        canDelete: true,
        parent: "settings",
      },
      icon: <FiPenTool />,
      roles: [ROLES.ADMIN],
    },
    {
      name: "user-roles",
      list: "/dashboard/settings/user-roles",
      create: "/dashboard/settings/user-roles/create",
      edit: "/dashboard/settings/user-roles/edit/:id",
      show: "/dashboard/settings/user-roles/show/:id",
      parentName: "settings",
      meta: {
        canDelete: true,
        parent: "settings",
      },
      icon: <FiUserX />,
      roles: [ROLES.ADMIN],
    },
    {
      name: "reviews",
      list: "/dashboard/settings/reviews",
      create: "/dashboard/settings/reviews/create",
      edit: "/dashboard/settings/reviews/edit/:id",
      show: "/dashboard/settings/reviews/show/:id",
      parentName: "settings",
      meta: {
        canDelete: true,
        parent: "settings",
      },
      icon: <CommentOutlined />,
      roles: [ROLES.ADMIN],
    },
    {
      name: "specialties",
      list: "/dashboard/settings/specialties",
      create: "/dashboard/settings/specialties/create",
      edit: "/dashboard/settings/specialties/edit/:id",
      show: "/dashboard/settings/specialties/show/:id",
      parentName: "settings",
      meta: {
        canDelete: true,
        parent: "settings",
      },
      icon: <RiUserStarFill />,
      roles: [ROLES.ADMIN],
    },

    // blogging
    {
      name: "blogging",
      meta: {
        label: "Blogging",
      },
      icon: <SiAmazonsimpleemailservice />,
      roles: [ROLES.ADMIN, ROLES.CREATOR, ROLES.TRAINER],
    },

    {
      name: "posts",
      list: "/dashboard/blogging/posts",
      create: "/dashboard/blogging/posts/create",
      edit: "/dashboard/blogging/posts/edit/:id",
      show: "/dashboard/blogging/posts/show/:id",
      meta: {
        canDelete: true,
        parent: "blogging",
        label: "Blog Posts",
      },
      icon: <FiFileText />,
      roles: [ROLES.ADMIN, ROLES.CREATOR, ROLES.TRAINER],
    },
    {
      name: "events",
      list: "/dashboard/blogging/events",
      create: "/dashboard/blogging/events/create",
      edit: "/dashboard/blogging/events/edit/:id",
      show: "/dashboard/blogging/events/show/:id",
      meta: {
        canDelete: true,
        parent: "blogging",
      },
      icon: <TbCalendarEvent />,
      roles: [ROLES.ADMIN, ROLES.CREATOR, ROLES.TRAINER],
    },

    // LMS
    {
      name: "lms",
      meta: {
        label: "LMS",
      },
      icon: <SiAmazonsimpleemailservice />,
      roles: [ROLES.ADMIN, ROLES.TRAINER, ROLES.STUDENT],
    },
    {
      name: "courses",
      list: "/dashboard/lms/courses",
      create: "/dashboard/lms/courses/create",
      edit: "/dashboard/lms/courses/edit/:id",
      show: "/dashboard/lms/courses/show/:id",
      meta: {
        canDelete: true,
        parent: "lms",
      },
      icon: <MdOutlineLibraryBooks />,
      roles: [ROLES.ADMIN, ROLES.TRAINER, ROLES.STUDENT],
    },
    {
      name: "enrollments",
      list: "/dashboard/lms/enrollments",
      create: "/dashboard/lms/enrollments/create",
      edit: "/dashboard/lms/enrollments/edit/:id",
      show: "/dashboard/lms/enrollments/show/:id",
      meta: {
        canDelete: true,
        parent: "lms",
      },
      icon: <TbPlugConnected />,
      roles: [ROLES.ADMIN, ROLES.TRAINER, ROLES.STUDENT],
    },

    {
      name: "account",
      meta: {
        label: "Account",
      },
      icon: <RiAccountCircleLine />,
      roles: [
        ROLES.ADMIN,
        ROLES.TRAINER,
        ROLES.DOCTOR,
        ROLES.STUDENT,
        ROLES.PETOWNER,
        ROLES.CREATOR,
      ],
    },
    {
      name: "verifications",
      list: "/dashboard/account/verifications",
      meta: {
        parent: "account",
      },
      icon: <FcApprove />,
      roles: [ROLES.DOCTOR, ROLES.ADMIN],
    },
    {
      name: "appointments",
      list: "/dashboard/account/appointments",
      meta: {
        parent: "account",
        label: "My Appointments",
      },
      icon: <FcCalendar />,
      roles: [ROLES.ADMIN, ROLES.DOCTOR, ROLES.PETOWNER],
    },
    {
      name: "classroom",
      list: "/dashboard/account/classroom",
      meta: {
        parent: "account",
      },
      icon: <SiGoogleclassroom />,
      roles: [ROLES.ADMIN, ROLES.TRAINER, ROLES.STUDENT, ROLES.CREATOR],
    },
    {
      name: "profile",
      list: "/dashboard/account/personal-information",
      meta: {
        parent: "account",
        label: "Personal Information",
      },
      icon: <RiUserSettingsLine />,
      roles: [
        ROLES.ADMIN,
        ROLES.TRAINER,
        ROLES.DOCTOR,
        ROLES.STUDENT,
        ROLES.PETOWNER,
        ROLES.CREATOR,
      ],
    },
    {
      name: "user-docs",
      list: "/dashboard/account/user-docs",
      meta: {
        parent: "account",
        label: "User documentation",
      },
      icon: <AiFillContacts />,
      roles: [ROLES.ADMIN, ROLES.DOCTOR],
    },

    // ecommerce
    {
      name: "ecommerce",
      meta: {
        canDelete: true,
        label: "Ecommerce",
      },
      icon: <MdProductionQuantityLimits />,
      roles: [ROLES.ADMIN],
    },
    {
      name: "products",
      list: "/dashboard/ecommerce/products",
      create: "/dashboard/ecommerce/products/create",
      edit: "/dashboard/ecommerce/products/edit/:id",
      show: "/dashboard/ecommerce/products/show/:id",
      meta: {
        canDelete: true,
        parent: "ecommerce",
      },
      icon: <MdProductionQuantityLimits />,
      roles: [ROLES.ADMIN],
    },
    {
      name: "customers",
      list: "/dashboard/ecommerce/customers",
      show: "/dashboard/ecommerce/customers/show/:id",
      meta: {
        canDelete: true,
        parent: "ecommerce",
      },
      icon: <RiCustomerService2Fill />,
      roles: [ROLES.ADMIN],
    },
    {
      name: "inventory",
      list: "/dashboard/ecommerce/inventory",
      show: "/dashboard/ecommerce/inventory/show/:id",
      meta: {
        canDelete: true,
        parent: "ecommerce",
      },
      icon: <MdOutlineInventory />,
      roles: [ROLES.ADMIN],
    },
    {
      name: "orders",
      parentName: "ecommerce",
      list: "/dashboard/ecommerce/orders",
      show: "/dashboard/ecommerce/orders/show/:id",
      meta: {
        canDelete: true,
        parent: "ecommerce",
      },
      icon: <FcSalesPerformance />,
      roles: [ROLES.ADMIN],
    },

    // vet health services
    {
      name: "vet-services",
      meta: {
        canDelete: true,
        label: "Vet Services",
      },
      icon: <MdProductionQuantityLimits />,
      roles: [ROLES.ADMIN, ROLES.DOCTOR, ROLES.PETOWNER],
    },
    {
      name: "services",
      list: "/dashboard/vet-services/services",
      create: "/dashboard/vet-services/services/create",
      edit: "/dashboard/vet-services/services/edit/:id",
      show: "/dashboard/vet-services/services/show/:id",
      meta: {
        canDelete: true,
        parent: "vet-services",
      },
      icon: <MdMedicalServices />,
      roles: [ROLES.ADMIN, ROLES.DOCTOR, ROLES.PETOWNER],
    },
    {
      name: "consultations",
      list: "/dashboard/vet-services/consultations",
      create: "/dashboard/vet-services/consultations/create",
      edit: "/dashboard/vet-services/consultations/edit/:id",
      show: "/dashboard/vet-services/consultations/show/:id",
      meta: {
        canDelete: true,
        parent: "vet-services",
      },
      icon: <MdProductionQuantityLimits />,
      roles: [ROLES.ADMIN, ROLES.DOCTOR, ROLES.PETOWNER],
    },
    {
      name: "appointments",
      list: "/dashboard/vet-services/appointments",
      show: "/dashboard/vet-services/appointments/show/:id",
      meta: {
        canDelete: true,
        parent: "vet-services",
      },
      icon: <RiCustomerService2Fill />,
      roles: [ROLES.ADMIN, ROLES.DOCTOR, ROLES.PETOWNER],
    },

    {
      name: "confiuragtions",
      meta: {
        canDelete: true,
        label: "Confiuragtions",
      },
      icon: <BiSolidDashboard />,
      roles: [ROLES.ADMIN, ROLES.CREATOR, ROLES.TRAINER],
    },
    {
      name: "categories",
      list: "/dashboard/configurations/categories",
      create: "/dashboard/configurations/categories/create",
      edit: "/dashboard/configurations/categories/edit/:id",
      show: "/dashboard/configurations/categories/show/:id",
      parentName: "confiuragtion",
      meta: {
        canDelete: true,
        parent: "confiuragtions",
      },
      icon: <TbCategoryPlus />,
      roles: [ROLES.ADMIN, ROLES.CREATOR, ROLES.TRAINER],
    },
    {
      name: "tags",
      list: "/dashboard/dashboard/configurations/tags",
      create: "/dashboard/dashboard/configurations/tags/create",
      edit: "/dashboard/dashboard/configurations/tags/edit/:id",
      show: "/dashboard/dashboard/configurations/tags/show/:id",
      parentName: "confiuragtions",
      meta: {
        canDelete: true,
        parent: "confiuragtions",
      },
      icon: <TbTags />,
      roles: [ROLES.ADMIN, ROLES.CREATOR, ROLES.TRAINER],
    },
    {
      name: "banners",
      list: "/dashboard/dashboard/configurations/banners",
      create: "/dashboard/dashboard/configurations/banners/create",
      edit: "/dashboard/dashboard/configurations/banners/edit/:id",
      show: "/dashboard/dashboard/configurations/banners/show/:id",
      parentName: "confiuragtions",
      meta: {
        canDelete: true,
        parent: "confiuragtions",
      },
      icon: <TfiGallery />,
      roles: [ROLES.ADMIN, ROLES.CREATOR, ROLES.TRAINER],
    },

    {
      name: "mailing",
      meta: {
        label: "Mailing",
      },
      icon: <SiAmazonsimpleemailservice />,
      roles: [ROLES.ADMIN, ROLES.CREATOR],
    },
    {
      name: "subscribers",
      list: "/dashboard/mailing/subscribers",
      create: "/dashboard/mailing/subscribers/create",
      edit: "/dashboard/mailing/subscribers/edit/:id",
      show: "/dashboard/mailing/subscribers/show/:id",
      meta: {
        canDelete: true,
        parent: "mailing",
      },
      icon: <FiUsers />,
      roles: [ROLES.ADMIN, ROLES.CREATOR],
    },

    {
      name: "contacts",
      list: "/dashboard/mailing/contacts",
      create: "/dashboard/mailing/contacts/create",
      edit: "/dashboard/mailing/contacts/edit/:id",
      show: "/dashboard/mailing/contacts/show/:id",
      meta: {
        canDelete: true,
        label: "Messages",
        parent: "mailing",
      },
      icon: <FiMessageCircle />,
      roles: [ROLES.ADMIN, ROLES.CREATOR],
    },
    {
      name: "mails",
      list: "/dashboard/mailing/mails",
      create: "/dashboard/mailing/mails/create",
      edit: "/dashboard/mailing/mails/edit/:id",
      show: "/dashboard/mailing/mails/show/:id",
      meta: {
        canDelete: true,
        parent: "mailing",
      },
      icon: <TbMessage />,
      roles: [ROLES.ADMIN, ROLES.CREATOR],
    },
  ];
  return {
    dashboardMenus,
    filterMenuItemsByRole,
  };
};
