class Field extends React.Component {
    render () {
        const {name, value, onChange, children} = this.props
        return <div className="form-group" >
            <label htmlForm={name} > {children} </label>
            <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control" />
        </div>
    }
}



class Home extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            nom: '',
            prenom: '',
            newsletter: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        const name = e.target.name
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    }

    render () {
        console.log('render')
        return <div className="container">
            <Field name="nom" value={this.state.nom} onChnage={this.handleChange}> Nom </Field>
            <Field name="prénom" value={this.state.nom} onChnage={this.handleChange}> Prénom </Field>
            {JSON.stringify(this.state)}
        </div>
    }
}



ReactDOM.render(<Home />, document.querySelector('#app2'))