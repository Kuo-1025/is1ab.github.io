import { Table } from "antd";
import { ColumnType } from "antd/es/table";

export function Alumni(){
    const masterAlumniDatas = [
        {
            name: "何亞翰",
            joinDate: "2022.09-2024.08",
            title: "使用生成式模型於公開來源情報去識別化技術之應用",
            ability: "密碼學、硬體安全",
            experience: "資訊工程系 碩士學位",
            certificate: "",
            status: "畢業",
            website: "/#/Member/2022/Cliff"
        },
        {
            name: "李昆積",
            joinDate: "2022.09-2024.08",
            title: "Prompt Injection 分析與緩解策略之研究 – 以大語言模型聊天機器人為例",
            ability: "Web 攻防",
            experience: "資訊工程系 碩士學位",
            certificate: "",
            status: "兵役",
            website: "/#/Member/2022/kunjili"
        },
        {
            name: "陳丹妮",
            joinDate: "2022.09-2024.08",
            title: "輔助乳癌術後重建病人醫病共同決策之人工智慧聊天機器人",
            ability: "人工智慧",
            experience: "美國德州大學阿靈頓分校 雙聯學位",
            certificate: "",
            status: "訊能集思智能科技股份有限公司 - 產品經理"
        }
    ]
    const masterAlumniColumns: ColumnType<any>[] = [
        {
            key: 'name',
            dataIndex: 'name',
            title: "姓名",
            width: "10%",
            render: (_text: string, render: any, _index: number) => {
                return (
                    <>
                        {render.website === undefined ? <p>{render.name}</p> : <a href={render.website}>{render.name}</a>}
                    </>
                )
            }
        },
        {
            key: 'joinDate',
            dataIndex: 'joinDate',
            title: "參與時間",
            width: "12%"
        },
        {
            key: 'title',
            dataIndex: 'title',
            title: "題目",
            width: "25%"
        },
        {
            key: 'ability',
            dataIndex: 'ability',
            title: "專長",
            width: "12%"
        },
        {
            key: 'note',
            dataIndex: 'note',
            title: "備註",
            width: "23%",
            render: (_text: string, record: any, _index: number) => {
                return (
                    <>
                        { record.experience == '' ? null : <p className="fst-italic" style={{color: "#0693e3"}}>{record.experience}</p> }
                        { record.certificate == '' ? null : <p style={{color: "lightgreen"}}>{record.certificate}</p> }
                    </>
                )
            }
        },
        {
            key: 'status',
            dataIndex: 'status',
            title: "狀態",
            width: "18%"
        }
    ]
    const undergraduateAlumniStudentTableDatas = [
        {
            year: "113",
            name: "陳思群、<p style={{color: "blue"}}>顏睿寬</p>、許宸瑋",
            title: "結合語言模型與特徵機制之整合式網路入侵偵測告警系統",
            note: "通過"
        },
        {
            year: "113",
            name: "吳奕萱、程邦博、<p style={{color: "blue"}}>何穎宣</p>",
            title: "基於 API 呼叫序列的深度學習模型用於勒索病毒偵測",
            note: "通過大專生計畫編號:113-2813-C-027-054-E、榮獲 2024 北科實務專題競賽 佳作"
        },
        {
            year: "113",
            name: "黃政、劉硯皓、張庭偉",
            title: "Practice Tools for Simple Design",
            note: "榮獲 2024 北科實務專題競賽 佳作"
        },
        {
            year: "113",
            name: "林蔚、許恩誠、<p style={{color: "blue"}}>魏名宏</p>",
            title: "透過模擬駭客行為來學習網路攻防觀念之教學用軟體設計",
            note: "通過"
        },
        {
            year: "112",
            name: "張洸銘",
            title: "CVE-2023-35936發現以及0-day",
            note: "與陳彥霖老師合作指導"
        }
    ]
    const undergraduatedAlumniStudentTableColumns: ColumnType<any>[] = [
        {
            key: 'year',
            dataIndex: 'year',
            title: "學年",
            width: "8%"
        },
        {
            key: 'name',
            dataIndex: 'name',
            title: "姓名",
            width: "11%"
        },
        {
            key: 'title',
            dataIndex: 'title',
            title: "專題名稱",
            width: "50%"
        },
        {
            key: 'note',
            dataIndex: 'note',
            title: "備註",
            width: "31%"
        },
    ]
    const othersStudentTableDatas = [
        {
            name: "李子儀",
            joinTime: "2022.11-2023.11",
            title: "<大學部>",
            status: "萬芳醫院",
            note: "-"
        },
        {
            name: "葉子多",
            joinTime: "2022.09-2023.08",
            title: "聯邦式學習上抗個體資料集成員推理攻擊之防禦強化技術",
            status: "美國賓州州立大學 雙聯學位",
            note: "與楊士萱老師合作指導"
        },
        {
            name: "蔡峻傑",
            joinTime: "2022.09-2024.08",
            title: "含加權要項可驗證分散式聚合函數之低隱私預算差分隱私方案",
            status: "N/A",
            note: "與楊士萱老師合作指導"
        }
    ]
    const othersStudentTableColumns: ColumnType<any>[] = [
        {
            key: 'name',
            dataIndex: 'name',
            title: "姓名",
            width: "10%"
        },
        {
            key: 'joinTime',
            dataIndex: 'joinTime',
            title: "參與時間",
            width: "10%"
        },
        {
            key: 'title',
            dataIndex: 'title',
            title: "題目",
            width: "35%"
        },
        {
            key: 'status',
            dataIndex: 'status',
            title: "目前狀態",
            width: "20%"
        },
        {
            key: 'note',
            dataIndex: 'note',
            title: "備註",
            width: "25%"
        },
    ]
    return (
        <div className="w-100">
            <div className="overflow-x-auto">
                <h4 className="text-center fw-bold">碩士生（Master students）</h4>
                <Table columns={masterAlumniColumns} dataSource={masterAlumniDatas} pagination={false} bordered></Table>
            </div>
            <hr />
            <div className="overflow-x-auto">
                <h4 className="text-center fw-bold">專題生（Undergraduate students）</h4>
                <Table columns={undergraduatedAlumniStudentTableColumns} dataSource={undergraduateAlumniStudentTableDatas} pagination={false} bordered></Table>
            </div>
            <hr />
            <div className="overflow-x-auto">
                <h4 className="text-center fw-bold">合作學生（Others）</h4>
                <Table columns={othersStudentTableColumns} dataSource={othersStudentTableDatas} pagination={false} bordered></Table>
            </div>
        </div>
    )
}
