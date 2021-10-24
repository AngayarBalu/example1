/** 
 * Admissible Client Height is 1120
*/

/* FUNCTION TO INCLUDE THE PARSE FILE */
function include(file) {

    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);

}

//include('/parser-js');
//include('parser.js');

/**
 * Global Declaration Space
 */

var dataObject;
const maintable = document.getElementById('main-table');
let second_table = document.getElementById('main-table-2');
var paper_title;


function get_barcode(code_text) {
    /**
     * Library: JsBarcode
     * Docs: https://lindell.me/JsBarcode/
     */
    JsBarcode("#barcode", code_text, {
        width: 1,
        height: 40,
        displayValue: false
    });

}

function register_number_box() {
    let html = `<table style="width:40%;">
    <tr>
    <td style="padding-right: 5px">Register Number</td>
    <td><div class="box" /></td>
    <td><div class="box" /></td>
    <td><div class="box" /></td>
    <td><div class="box" /></td>
    <td><div class="box" /></td>
    <td><div class="box" /></td>
    <td><div class="box" /></td>
    </tr>
    </table>`;
    headerLine2.innerHTML += html;

}

// async function get_data_from_server() {

//    // let response = await fetch('JSON_schema_question_paper.json');
//     // let response = await fetch("http://127.0.0.1:5487/examination/locate-answers", 
//     //     {
//     //         method: "POST",
//     //         headers: {
//     //             'Content-Type': 'application/json'
//     //         },
//     //         body: JSON.stringify({regno: "21ES116", word: 'cult'})
//     //     }
//     // );
    
//     let response = await fetch("/printpdf", 
//         {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/xxx-form'
//             }
//         }
//     );
//     // let response = await fetch("/print-II-pdf", 
//     //     {
//     //         method: "POST",
//     //         headers: {
//     //             'Content-Type': 'application/xxx-form'
//     //         }
//     //     }
//     // );
//     let data = await response.json();
//     return data;
// }

/* GETTING DATA FROM SERVER */

// const data = get_data_from_server()
//     .then((data) => {
//         dataObject = data;
//         console.log(data);
//     })
//     .then(() => {
//         //get_barcode(dataObject["code"]);
//         // register_number_box();
//         main();
       
//     })
//     .catch((err) => {
//         alert('Please refresh this page!', err);
//     });

    var user = localStorage.getItem("user");
    var date= localStorage.getItem("date of exam");
    var title = localStorage.getItem("title");
    var type = localStorage.getItem("type of test");
    var std = localStorage.getItem("standard");
    var school = localStorage.getItem("school name");

    var send = new FormData();
    send.append('user', user);
    send.append('date of exam', date);
    send.append('title', title);
    send.append('type of test', type);
    send.append('standard', std);
    send.append('school name', school);
    
    fetch('/print/pdf', {
        method: 'POST',
        body: send
    }).then(function (response) {

        //console.log(response);

        return response.json();

    }).then(function (data) {
        console.log(data);
        if(data.status=="failed" && data.response=="Question not found"){
            alert("Question not found")
        }
        else{
            dataObject = data;
            main();
        }
        

    });

/* ITERATING THE JSON OBJECT */
function main() {

    var bar_code='';

   
    var sch_name;
    

    for (let key in dataObject) {

        if (key == "type of test") {
            if(dataObject[key] == "SSLC Examination" || dataObject[key] == "HSC Examination") {

            }
            else{
                let test = `<table class="mx-auto"><tr style="font-size: 25px;">
                <td style="text-align: center; vertical-align: middle;"><b>`+ dataObject[key] + `</b></td>` +
                `<tr></table>`;
            maintable.innerHTML += test;
            
            }
            //paper_title += sch_name;
            sch_name = dataObject[key];
            
        }

        else if (key == "school name") {
            
            if (sch_name == "Quarterly Examination" || sch_name == "Half-yearly Examination" || sch_name == "Annual Examination" || sch_name == "SSLC Examination" || sch_name == "HSC Examination") {

            }
            else {
                let school = `<table class="mx-auto"><tr style="font-size: 25px;">
                <td style="text-align: center; vertical-align: middle;"><b>`+ dataObject[key] + `</b></td>` +
                    `<tr></table>`;
                maintable.innerHTML += school;
                
            }
        }

        else if(key == "standard"){
            
            if (sch_name == "SSLC Examination" || sch_name == "HSC Examination") {

            }
            else {
                let std = `<table class="mx-auto"><tr style="font-size: 25px;">
                <td style="text-align: center; vertical-align: middle;"><b>`+ dataObject[key] + `</b></td>` +
                    `<tr></table>`;
                maintable.innerHTML += std;
            }
        }

        else if (key == "title") {
            let title = `<table class="mx-auto"><tr style="font-size: 25px;">
                <td style="text-align: center; vertical-align: middle;"><b>`+ dataObject[key] + `</b></td>` +
                `<tr></table>`;
            maintable.innerHTML += title;
            paper_title = dataObject[key];

            bar_code += dataObject[key]+'/';

            console.log("Paper title "+paper_title);
            document.getElementById("paper_title").innerHTML = paper_title;
        }

        else if (key == "time") {
            let title =
                `<table class="mt-5"><tr style="font-size: 15px; width:100%;">` +
                `<td style="width:35%;">Time Allowed: ` + dataObject[key] + `</td>` +
                `<td class="align-right" style="width:70%;">Maximum Marks: ` + dataObject["maximum marks"] + `</td>` +
                `</tr></table>`;
            maintable.innerHTML += title;
        }

        else if (key == "maximum marks") {

        }

        else if (key == "code") {

        }

        else if (key == "date of exam") {

            bar_code += dataObject[key]+' ';

            get_barcode(bar_code);
        }

        else if (key == "user") {

        }

        else if (key == "submitted") {

        }

        else if (key == "instructions") {
            let instructionsStatement = '<table style="width:100%; margin-top:0mm"><tr> <td rowspan="2" style="vertical-align:text-top; width:20%;"><b>Instructions:</b></td>';
            let instructions = dataObject["instructions"];
            let line = 1;
            instructions.forEach((value, index) => {
                if (line++ != 1)
                    instructionsStatement += '<td style="width:8%;">(' + (index + 1) + ')</td> <td>' + value + '</td>';
                else
                    instructionsStatement += '<td style="width:8%;">(' + (index + 1) + ')</td> <td>' + value + '</td>';
                instructionsStatement += '</tr>'
            });
            instructionsStatement += '</tr></table>'
            maintable.innerHTML += instructionsStatement;
        }

        else {
            print_section(key, dataObject[key]);
        }

    }

}


/**
 * Section Printing Utility
 */

function print_section(section_name, section_data) {

    let other_keys = ["title", "marks", "heading"];

    let headers = `<table> <tr style="text-align: center;width:100%;">
        <td colspan="3"  class="part-heading">`+section_name.toUpperCase()+` <br>( ` + section_data["title"] + ` - ` + section_data["marks"] + ` MARKS)<br></td>` +
        `</tr></table>`;
    second_table.innerHTML += headers;

    for (let part_no in section_data) {
        
        if(other_keys.includes(part_no)){
            continue;
        }

        let part_headers = '<table class="no-margin"><tr><td class="part-heading full-width center">' + part_no.toUpperCase() + '</td></tr></table>';
        
        if(section_data[part_no]["heading"] != undefined && section_data[part_no]["marks"]!=undefined){
            part_headers += '<table class="no-margin">' +
                '<tr><td style="width:5%;"/><td style="width:65%;">' + section_data[part_no]["heading"] + '</td><td class="marks"><b>' + section_data[part_no]["marks"] + '</b></td></tr>' +
                '</table>';
        }
        
        second_table.innerHTML += part_headers;

        for (let question_no in section_data[part_no]) {
            if (!["heading", "marks", "quotedWords", "quoteType", "options"].includes(question_no)) {
                let question_data = section_data[part_no][question_no];
                let parse_type = question_data["type"];
                
                choose_parser(parse_type, question_no, question_data, second_table);
                
            }
        }
        console.log(section_name.toUpperCase()+" : "+part_no.toUpperCase()+" Parsed");


    }
    console.log(section_name.toUpperCase() + " PARSED");
}

/* FUNCTION TO CHOOSE THE PARSE BASED ON TYPES */
function choose_parser(parse_type, question_no, question_data, table) {
    
    switch (parse_type) {
        
        case "MCQSL":
            table.innerHTML += mcq_single_line_parser(question_no, question_data);
            break;
        case "MCQML":
            table.innerHTML += mcq_multiline_parser(question_no, question_data);
            break;
        case "MCQB":
            table.innerHTML += mcq_bracket_parser(question_no, question_data);
            break;
        case "MCQN":
            table.innerHTML += mcq_none_parser(question_no, question_data);
            break;
        case "MCQMLA":
            table.innerHTML += mcq_multiline_array_parser(question_no, question_data);
            break;
        case "MCQCH":
            table.innerHTML += or_type(question_no, question_data);
            break;
        case "POT":
            table.innerHTML += poem_or_type(question_no, question_data);
            break;
        case "COMP":
            table.innerHTML += comp_type(question_no, question_data);
            break;
        case "COMPIMG":
            table.innerHTML += comp_img_type(question_no, question_data);
            break;
        case "SYN":
            table.innerHTML += synonyms_parser(question_no,question_data);
            break;
        case "MATCH":
            table.innerHTML += match(question_no,question_data);
            break;
        case "FORMAL":
            table.innerHTML += formal_letter(question_no,question_data);
            break;
        case "INFORMAL":
            table.innerHTML += informal_letter(question_no,question_data);
            break;
        case "FILL":
            table.innerHTML += fill_blanks(question_no,question_data);
            break;
        case "POEM":
            table.innerHTML += poem_phrase(question_no,question_data);
            break;
        case "TRAPIC":
            table.innerHTML += trapic(question_no,question_data);
            break;
    }
}