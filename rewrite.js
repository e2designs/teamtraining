
let response = '{"result":[{"key1": "value1", "key2": "value2", "key3": "value3"}]}'

let snowresponse = '{"result":[{"parent":"","reason":"","watch_list":"","upon_reject":"cancel","sys_updated_on":"2015-07-06 18:59:27","type":"standard","approval_history":"","number":"CHG0000024","test_plan":"--Confirm that there are no monitoring alerts forthe router","cab_delegate":"","requested_by_date":"","state":"3","sys_created_by":"admin","knowledge":"false","order":"","phase":"requested","cmdb_ci":"","delivery_plan":"","contract":"","impact":"3","active":"false","work_notes_list":"","priority":"4","sys_domain_path":"/","cab_recommendation":"","production_system":"false","review_date":"","business_duration":"","group_list":"","requested_by":{"link":"https://dev71226.service-now.com/api/now/table/sys_user/6816f79cc0a8016401c5a33be04be441","value":"6816f79cc0a8016401c5a33be04be441"},"change_plan":"","approval_set":"","implementation_plan":"-- Place router into maintenance mode in the monitoring platform\\r\\n-- Logon to router through SSH\\r\\n-- Run the following command\\r\\n\\r\\nrouter(config-router)#router bgp 12345\\r\\nrouter(config-router)#neighbor {neighbor ip} soft-reconfig [inbound]\\r\\nrouter#clear ip bgp {neighbor ip} soft in\\r\\n\\r\\n-- Confirm the sessions have been cleared\\r\\n-- Place router back into operational mode in the monitoring platform","end_date":"","short_description":"Clear BGP sessions on a Cisco router","correlation_display":"","delivery_task":"","work_start":"2015-07-06 18:56:04","additional_assignee_list":"","outside_maintenance_schedule":"false","std_change_producer_version":{"link":"https://dev71226.service-now.com/api/now/table/std_change_producer_version/16c2273c47010200e90d87e8dee49006","value":"16c2273c47010200e90d87e8dee49006"},"service_offering":"","sys_class_name":"change_request","closed_by":{"link":"https://dev71226.service-now.com/api/now/table/sys_user/6816f79cc0a8016401c5a33be04be441","value":"6816f79cc0a8016401c5a33be04be441"},"follow_up":"","reassignment_count":"2","review_status":"","assigned_to":"","start_date":"","sla_due":"","comments_and_work_notes":"","escalation":"0","upon_approval":"proceed","correlation_id":"","made_sla":"true","backout_plan":"Due to the limited number of commands in the implementation plan it is not possible to backout the change.\\r\\n\\r\\nIf required you are authorized to reboot the router if BGP fails to work","conflict_status":"Not Run","sys_updated_by":"admin","opened_by":{"link":"https://dev71226.service-now.com/api/now/table/sys_user/6816f79cc0a8016401c5a33be04be441","value":"6816f79cc0a8016401c5a33be04be441"},"user_input":"","sys_created_on":"2015-07-06 18:55:46","on_hold_task":"","sys_domain":{"link":"https://dev71226.service-now.com/api/now/table/sys_user_group/global","value":"global"},"closed_at":"2015-07-06 18:56:23","review_comments":"","business_service":"","time_worked":"","expected_start":"","opened_at":"2015-06-09 18:55:46","work_end":"2015-07-06 18:56:10","phase_state":"open","cab_date":"","work_notes":"","close_code":"successful","assignment_group":{"link":"https://dev71226.service-now.com/api/now/table/sys_user_group/287ebd7da9fe198100f92cc8d1d2154e","value":"287ebd7da9fe198100f92cc8d1d2154e"},"description":"Resend the complete BGP table to neighboring routers\\r\\n\\r\\n--Both neighbors need to support soft reset route refresh capability.\\r\\n--Stores complete BGP table of you neighbor in router memory.\\r\\n--Not a good idea on a peering router with full feed, due to the memory requirements.\\r\\n","on_hold_reason":"","calendar_duration":"","close_notes":"Completed without issues","sys_id":"1766f1de47410200e90d87e8dee490f6","contact_type":"phone","cab_required":"false","urgency":"3","scope":"3","company":"","justification":"","activity_due":"","comments":"","approval":"approved","due_date":"","sys_mod_count":"10","on_hold":"false","sys_tags":"","conflict_last_run":"","unauthorized":"false","location":"","risk":"3","category":"Other","risk_impact_analysis":""}]}'


/** problem statement
 * For entry in result.
 * return new object with only key1 and key3 values
 * rename key1 to first
 * rename key2 to last
 */

function parse_json_string(){
    // Print response string to console
    console.log(response);
    // initialize obj variable and assign the JSON object converted from the response string.
    let obj = JSON.parse(response);
    // log the obj variable
    console.log(obj);
    // initialize entry variable
    let entry = null;
    let tickets = [];
    let ticket = {"first": null, "last": null};
    // interate through entries
    for (entry in obj.result){
        console.log(`ENTRY:${entry}`);
        console.log(`KEY: ${obj.result[entry].key1}`)
        ticket.first = obj.result[entry].key1;
        ticket.last = obj.result[entry].key3;
        tickets.push(ticket);

    }
    // return tickets
    console.log(tickets)
}


parse_json_string()
