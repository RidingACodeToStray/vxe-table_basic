<template>
  <div>
    <h1>表格数据{{ tableData.length }}条</h1>
         <vxe-toolbar :data="tableData" setting>
          <template v-slot:buttons>
            <vxe-button @click="exportCsvEvent">默认导出</vxe-button>
            <vxe-button @click="$refs.xTable.refreshColumn()">确定</vxe-button>
          </template>
        </vxe-toolbar>
    <vxe-grid
      border
      resizable
      height="400"
      ref="xTable"
      :data.sync="tableData"
      :span-method="colspanMethod"
      :edit-config="{key: 'EMP_NO', trigger: 'dblclick', mode: 'cell'}"
    >
      <template v-for="(item,index) in columnData">
          <vxe-table-column
            v-if="item.hasOwnProperty('selection')"
            :key="index"
            type="selection"
            width="60"
          ></vxe-table-column>
          <vxe-table-column
            v-else-if="item.children"
            :label="item.label" :key="index" align="center">
            <vxe-table-column
                v-for="(itemChild,indexChild) in item.children"
                :key="indexChild"
                align="center"
                :prop="itemChild.prop"
                :edit-render="itemChild.editRender"
                :label="itemChild.label"
                :formatter="itemChild.formatter"
            ></vxe-table-column>
          </vxe-table-column>
          <vxe-table-column
            v-else
            align="center"
            :key="index"
            :prop="item.prop"
            :edit-render="item.editRender"
            :label="item.label"
            :formatter="item.formatter"
           ></vxe-table-column>
        </template>
    </vxe-grid>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columnData: [
        {
            selection:true
        },
        {
          prop: "CO_CD",
          label: "CO_CD",
          visible: true,
          editRender: { name: "input" }
        },
        {
            label:"基本信息",
            children:[
                {
                    prop: "DEPT_CD",
                    label: "DEPT_CD",
                    visible: true
                },
                {
                    prop: "DIV_CD",
                    label: "DIV_CD",
                    visible: true,
                    formatter: function({ cellValue }) {
                        return "$" + cellValue;
                    }
                },
            ]
        },
        {
          prop: "EMP_COUNTRY",
          label: "EMP_COUNTRY",
          visible: true
        },
        {
          prop: "EMP_DUTY",
          label: "EMP_DUTY",
          visible: true
        },
        {
          prop: "EMP_JOB",
          label: "EMP_JOB",
          visible: true
        },
        {
          prop: "EMP_NATIVE",
          label: "EMP_NATIVE",
          visible: true
        },
        {
          prop: "EMP_NM",
          label: "EMP_NM",
          visible: true
        },
        {
          prop: "EMP_NO",
          label: "EMP_NO",
          visible: true
        },
        {
          prop: "EMP_SEX",
          label: "EMP_SEX",
          visible: true
        }
      ],
      tableData:[]
    };
  },
  created() {
    this.tableData = [
       {
            "CO_CD": "20001231321321321321321",
            "DIV_CD": "2000",
            "EMP_NO": "A100001",
            "EMP_NM": "杨庄莹",
            "EMP_SEX": "F",
            "DEPT_CD": "X001",
            "EMP_JOB": "L001",
            "EMP_DUTY": "",
            "EMP_NATIVE": "南京市",
            "EMP_COUNTRY": "CN"
        },
        {
            "CO_CD": "2000",
            "DIV_CD": "2000",
            "EMP_NO": "A100002",
            "EMP_NM": "申龙杰",
            "EMP_SEX": "M",
            "DEPT_CD": "C140",
            "EMP_JOB": "L011",
            "EMP_DUTY": "20",
            "EMP_NATIVE": "黑龙江省",
            "EMP_COUNTRY": "CN"
        },
        {
            "CO_CD": "2000",
            "DIV_CD": "2000",
            "EMP_NO": "A100003",
            "EMP_NM": "金永杰",
            "EMP_SEX": "M",
            "DEPT_CD": "X001",
            "EMP_JOB": "L001",
            "EMP_DUTY": "",
            "EMP_NATIVE": "吉林省",
            "EMP_COUNTRY": "CN"
        },
        {
            "CO_CD": "2000",
            "DIV_CD": "2000",
            "EMP_NO": "A100004",
            "EMP_NM": "邱炎辉",
            "EMP_SEX": "M",
            "DEPT_CD": "X001",
            "EMP_JOB": "L001",
            "EMP_DUTY": "",
            "EMP_NATIVE": "湖北省",
            "EMP_COUNTRY": "CN"
        },
        {
            "CO_CD": "2000",
            "DIV_CD": "2000",
            "EMP_NO": "A100005",
            "EMP_NM": "李军",
            "EMP_SEX": "M",
            "DEPT_CD": "X001",
            "EMP_JOB": "L001",
            "EMP_DUTY": "",
            "EMP_NATIVE": "湖南省",
            "EMP_COUNTRY": "CN"
        },
        {
            "CO_CD": "2000",
            "DIV_CD": "2000",
            "EMP_NO": "A100006",
            "EMP_NM": "刘杰",
            "EMP_SEX": "M",
            "DEPT_CD": "X001",
            "EMP_JOB": "L001",
            "EMP_DUTY": "",
            "EMP_NATIVE": "广州市",
            "EMP_COUNTRY": "CN"
        },
        {
            "CO_CD": "2000",
            "DIV_CD": "2000",
            "EMP_NO": "A100007",
            "EMP_NM": "周凯",
            "EMP_SEX": "M",
            "DEPT_CD": "X001",
            "EMP_JOB": "L001",
            "EMP_DUTY": "",
            "EMP_NATIVE": "湖南省",
            "EMP_COUNTRY": "CN"
        },
    ]
  },
  methods: {
    colspanMethod({ row, rowIndex, column, columnIndex, data }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 2) {
          return {
            rowspan: 1,
            colspan: 2
          };
        } else if (columnIndex === 3) {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    exportCsvEvent () {
            //自带的导出及配置无法解决长数组被科学计数的问题
            this.$refs.xTable.exportCsv()
        }
  }
};
</script>
<style lang="less">
.vxe-toolbar{
  display: flex;
  justify-content: flex-end;
  .vxe-button--wrapper{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>