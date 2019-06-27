<template>
    <div class="hello">
        <h1>表格数据{{ tableData.length }}条</h1>
        <div class="table-oper">
          <span class="menu-btn">
            <i class="icon-menu"></i>
            <div class="menu-wrapper">
              <template v-for="(column,index) in columnData">
                <vxe-checkbox
                  v-if="column.property"
                  class="checkbox-item"
                  v-model="column.visible"
                  :key="index"
                  @change="$refs.xTable.refreshColumn()">{{ column.label }}</vxe-checkbox>
              </template>
            </div>
          </span>
        </div>
        <vxe-toolbar>
          <template v-slot:buttons>
            <vxe-button @click="exportCsvEvent">默认导出</vxe-button>
          </template>
        </vxe-toolbar>
        <vxe-table ref="xTable" resizable border height="500" 
        :data.sync="tableData" 
        :customs.sync="columnData"
        :edit-config="{key: 'EMP_NO', trigger: 'dblclick', mode: 'cell'}">
            <template v-for="(item,index) in columnData">
                <vxe-table-column v-if="item.hasOwnProperty('selection')" :key="index" type="selection" width="60"></vxe-table-column>
                <vxe-table-column v-else :key="index" :prop="item.prop" :edit-render="item.editRender" :label="item.label" :formatter="item.formatter"></vxe-table-column>
            </template>
        </vxe-table>
    </div>
</template>
<script>
export default {
    //行内编辑时需要在edit-config中设定行唯一的key
    data() {
        return {
            tableData: [],
            columnData: [
                {
                    selection:true
                },
                {
                    prop: "CO_CD",
                    label: "CO_CD",
                    visible: true,
                    editRender:{name: 'input'}
                },
                {
                    prop: "DEPT_CD",
                    label: "DEPT_CD",
                    visible: true
                },
                {
                    prop: "DIV_CD",
                    label: "DIV_CD",
                    visible: true,
                    formatter:function({ cellValue}){
                        return '$' + cellValue
                    }
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
                },
            ]
        }
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
            {
                "CO_CD": "2000",
                "DIV_CD": "2000",
                "EMP_NO": "A100008",
                "EMP_NM": "胡秋文",
                "EMP_SEX": "M",
                "DEPT_CD": "D110",
                "EMP_JOB": "L009",
                "EMP_DUTY": "",
                "EMP_NATIVE": "江西省",
                "EMP_COUNTRY": "CN"
            },
            {
                "CO_CD": "2000",
                "DIV_CD": "2000",
                "EMP_NO": "A100009",
                "EMP_NM": "谢辉",
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
                "EMP_NO": "A100010",
                "EMP_NM": "方华",
                "EMP_SEX": "F",
                "DEPT_CD": "X001",
                "EMP_JOB": "L001",
                "EMP_DUTY": "",
                "EMP_NATIVE": "黑龙江",
                "EMP_COUNTRY": "CN"
            },
            {
                "CO_CD": "2000",
                "DIV_CD": "2000",
                "EMP_NO": "A100011",
                "EMP_NM": "杨鏊宇",
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
                "EMP_NO": "A100012",
                "EMP_NM": "谢玉真",
                "EMP_SEX": "F",
                "DEPT_CD": "X001",
                "EMP_JOB": "L007",
                "EMP_DUTY": "",
                "EMP_NATIVE": "广东省",
                "EMP_COUNTRY": "CN"
            },
            {
                "CO_CD": "2000",
                "DIV_CD": "2000",
                "EMP_NO": "A100013",
                "EMP_NM": "杨瑞花",
                "EMP_SEX": "F",
                "DEPT_CD": "J100",
                "EMP_JOB": "L007",
                "EMP_DUTY": "",
                "EMP_NATIVE": "广东省",
                "EMP_COUNTRY": "CN"
            },
            {
                "CO_CD": "2000",
                "DIV_CD": "2000",
                "EMP_NO": "A100014",
                "EMP_NM": "曹海彪",
                "EMP_SEX": "M",
                "DEPT_CD": "X001",
                "EMP_JOB": "L001",
                "EMP_DUTY": "",
                "EMP_NATIVE": "陕西省",
                "EMP_COUNTRY": "CN"
            },
            {
                "CO_CD": "2000",
                "DIV_CD": "2000",
                "EMP_NO": "A100015",
                "EMP_NM": "潘裕富",
                "EMP_SEX": "M",
                "DEPT_CD": "X001",
                "EMP_JOB": "L001",
                "EMP_DUTY": "",
                "EMP_NATIVE": "广东省",
                "EMP_COUNTRY": "CN"
            },
            {
                "CO_CD": "2000",
                "DIV_CD": "2000",
                "EMP_NO": "A100016",
                "EMP_NM": "杨崇",
                "EMP_SEX": "F",
                "DEPT_CD": "F320",
                "EMP_JOB": "L007",
                "EMP_DUTY": "00",
                "EMP_NATIVE": "湖北省",
                "EMP_COUNTRY": "CN"
            },
            {
                "CO_CD": "2000",
                "DIV_CD": "2000",
                "EMP_NO": "A100017",
                "EMP_NM": "胡海博",
                "EMP_SEX": "M",
                "DEPT_CD": "J210",
                "EMP_JOB": "L008",
                "EMP_DUTY": "",
                "EMP_NATIVE": "吉林省",
                "EMP_COUNTRY": "CN"
            },
            {
                "CO_CD": "2000",
                "DIV_CD": "2000",
                "EMP_NO": "A100018",
                "EMP_NM": "胡时川",
                "EMP_SEX": "M",
                "DEPT_CD": "X001",
                "EMP_JOB": "L001",
                "EMP_DUTY": "",
                "EMP_NATIVE": "湖北省",
                "EMP_COUNTRY": "CN"
            },
        ]
        //数据字段CO_CD,DEPT_CD,DIV_CD,EMP_COUNTRY,EMP_DUTY,EMP_JOB,EMP_NATIVE,EMP_NM,EMP_NO,EMP_SEX
        // this.$axios.post('http://serverb.imartinfo.com:9001/p/public/api/auto/getSpData/name/eab005f7cb547607a4bbea2485aea641', {
        //     CO_CD: "2000",
        //     USER_ID: "web01",
        //     LAN_CD: "KR",
        //     TOKEN: "qmeKa56co2qEPNP4ikIa/A=="
        // }).then((res) => {
        //     if (res.status == 200) {
        //         console.log(res.data.returnValue)
        //         // this.tableData = res.data.returnValue
        //     } else {
        //         console.error(res)
        //     }
        // }, (res) => {
        //     console.error(res)
        // })
    },
    methods:{
        exportCsvEvent () {
            //自带的导出及配置无法解决长数组被科学计数的问题
            this.$refs.xTable.exportCsv()
        }
    }
}
</script>
<style lang="less">
.table-oper {
          height: 20px;
          width: 100%;
        }
        .menu-btn {
          position: relative;
          width: 20px;
          height: 20px;
          float: right;
          &:hover {
            .menu-wrapper {
              display: block;
            }
          }
        }
        .menu-wrapper {
          display: none;
          position: absolute;
          width: 150px;
          text-align: left;
          top: 16px;
          right: 0;
          z-index: 9;
          background-color: #fff;
          font-size: 14px;
          padding: 4px 10px;
          user-select: none;
          border: 1px solid #e8eaec;
          .checkbox-item {
            display: block;
            margin: 4px 0;
          }
        }
        .icon-menu {
          width: 16px;
          height: 0px;
          display: inline-block;
          margin-bottom: 16px;
          box-shadow: 0 6px 0 2px #606266, 0 0 0 2px #606266, 0 12px 0 2px #606266;
        }
</style>
