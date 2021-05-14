function WelcomeFunc ({name, children}) {
    return <div>
        <h1> Bonjour {name} </h1>
        <p>
            {children}
        </p>
    </div>
}

class Welcome extends React.Component {
    
    render () {
        return <div>
        <h1> Bonjour {this.props.name} </h1>
            <p>
                {this.props.children}
            </p>
        </div>
    }
}


class Clock extends React.Component {

    constructor (props) {
        super(props)
        this.state = {date: new Date()}
        this.timer = null
    }

    componentDidMount () {
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }

    componentWillUnmount () {
        window.clearInterval(this.timer)
    }

    tick () {
        this.setState({date: new Date()})
    }

    render () {
        return <div>
            Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
        </div>
    }
}


class Incrementer extends React.Component {

    constructor (props) {
        super(props)
        this.state = {n: props.start, timer: null}
    }

    componentDidMount () {
        this.play()
    }

    componentWillUnmount () {
        window.clearInterval(this.state.timer)
    }

    increment () {
        this.setState(function (state, props) {
            return {n: state.n + props.step}
        })
    }

    pause () {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: null
        })
    }

    play () {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: window.setInterval(this.increment.bind(this), 1000)
        })
    }

    reset () {
        window.clearInterval(this.state.n)
        this.setState({
            n: 0
        })
    }

    toggle () {
        return this.state.timer ? this.pause() : this.play()
    }

    label () {
        return this.state.timer ? 'Pause' : 'Lecture'
    }

    render () {
        return <div> 
            Valeur: { this.state.n } <button onClick={this.reset.bind(this)}>Reset</button>
                <button onClick={this.toggle.bind(this)}>{this.label()}</button>
            </div>
    }

}


Incrementer.defaultProps = {
    start: 0,
    step: 1
}


class ManualIncrementer extends React.Component {

    constructor (props) {
        super(props)
        this.state = {n: 0}
    }

    increment () {
        this.setState(function (state, props) {
            return { n: state.n + 1 }
        })
    }

    render () {
        return <div>Valeur: { this.state.n } <button onClick={this.increment.bind(this)}>Incrementer</button></div>
    }

}

function Home () {
    return <div>
        <Welcome name="Dorothée" />
        <Welcome name="Jean" />
        <Clock />
        <Incrementer start={1} step={1} />
    </div>
}


ReactDOM.render(<Home />, document.querySelector('#app'))