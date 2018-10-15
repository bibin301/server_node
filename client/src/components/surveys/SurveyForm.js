import {
    map as _map,
    each as _each

} from 'lodash';
import React ,{Component} from 'react';
import { reduxForm ,Field} from 'redux-form';
import {Link} from 'react-router-dom';


import SurveyField from './SurveyField';

//152

const FIELDS = [
    {label : 'Survey Title' , name: 'title'},
    {label : 'Subject Line' , name: 'subject'},
    {label : 'Email Body' , name: 'body'},
    {label : 'Recipient List' , name: 'emails'}

];


class SurveyForm extends Component {
    renderFields(){
        // return(
        //     <div>
        //         <Field type="text" name="title" component={SurveyField} />
        //     </div>
        // )
        return _map(FIELDS ,({label , name}) =>{
           
            
            return(<Field 
                key={name} 
                component={SurveyField} 
                type="text"
                 label={label} 
                name={name}
                />
                ) 
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}
                >
               {/* <Field 
               label="Survey Title"
               type="text"
               name="title"
               component={SurveyField}
               />

                <Field 
               label="Subject Line"
               type="text"
               name="subject"
               component={SurveyField}
               />

                <Field 
               label="Email Body"
               type="text"
               name="body"
               component={SurveyField}
               />

                <Field 
               label="Recipient List"
               type="text"
               name="emails"
               component={SurveyField}
               /> */}

               {this.renderFields()}

               <Link to="/surveys"> 
               Cancel
               </Link>

               <button type="submit"> submit </button>
               </form>
                </div>
        )
    }
}

function validate(values){
    const error ={};
    _each(FIELDS,({name}) =>{
        if(!values[name]){
            error[name] ='you must provide a value'
        }

    });
    // if(!values.title){
    //     error.title ="title reqiured"
    // }
    // if(!values.subject){
    //     error.title ="subject reqiured"
    // }
    // if(!values.body){
    //     error.title ="title body"
    // }
    // if(!values.emails){
    //     error.title ="title emails"
    // }

    return error;

}

export default reduxForm({
    validate,
  form: 'surveyForm',

}) (SurveyForm);