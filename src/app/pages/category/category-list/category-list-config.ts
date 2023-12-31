import { TableColumn } from "src/@vex/interfaces/table-column.interface";
import { Category } from "src/app/responses/category/category.response";
import icCategory from "@iconify/icons-ic/twotone-category";

const tableColumns: TableColumn<Category>[] = [
  {
    label: "Nombre",
    property: "name",
    type: "text",
    cssClasses: ["font-medium", "w-10"],
  },
  {
    label: "Descripcion",
    property: "description",
    type: "textTruncate",
    cssClasses: ["font-medium", "w-10"],
  },
  {
    label: "F. Creacion",
    property: "auditCreateDate",
    type: "datetime",
    cssClasses: ["font-medium", "w-10"],
  },
  {
    label: "Estado",
    property: "stateCategory",
    type: "badge",
    cssClasses: ["font-medium", "w-10"],
  },
  {
    label: "",
    property: "menu",
    type: "buttonGroup",
    buttonItems: [
      {
        buttonLabel: "EDITAR",
        buttonAction: "edit",
        buttonCondition: null,
        disable: false,
      },
      {
        buttonLabel: "ELIMINAR",
        buttonAction: "remove",
        buttonCondition: null,
        disable: false,
      },
    ],
    cssClasses: ["font-medium", "w-10"],
  },
];

const inputs = {
  numFilter: 0,
  textFiler: "",
  stateFilter: null,
  startDate: null,
  endDate: null,
};

export const componentSettings = {
  //ICONS
  icCategory: icCategory,
  //TABLE SETTINGS
  tableColumns: tableColumns,
  initialSort: "Id",
  initialSortDir: "desc",
  getInputs: inputs,
  buttonLabel: "EDITAR",
  buttonLabel2: "ELIMINAR",
  columnsFilter: tableColumns.map((column) => {
    return {
      label: column.label,
      property: column.property,
      type: column.type,
    };
  }),
};
