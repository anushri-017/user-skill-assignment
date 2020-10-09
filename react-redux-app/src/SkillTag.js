import React from 'react'
import ReactDOM from 'react-dom'
import ReactTags from 'react-tag-autocomplete'

class SkillTags extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tags: [
                { id: 1, name: "Painiting" },

            ],
            suggestions: [
                { id: 2, name: "Sketching" },
                { id: 3, name: "Writing" },
                { id: 4, name: "React" },
                { id: 5, name: "FootBall" },
                { id: 6, name: "Cricket" }
            ]
        }

        this.reactTags = React.createRef()
    }

    onDelete(i) {
        const tags = this.state.tags.slice(0)
        tags.splice(i, 1)
        this.setState({ tags })
    }

    onAddition(tag) {
        const tags = [].concat(this.state.tags, tag)
        this.setState({ tags })
    }

    render() {
        return (
            <ReactTags
                ref={this.reactTags}
                tags={this.state.tags}
                suggestions={this.state.suggestions}
                onDelete={this.onDelete.bind(this)}
                onAddition={this.onAddition.bind(this)} />
        )
    }
}

export default SkillTags;