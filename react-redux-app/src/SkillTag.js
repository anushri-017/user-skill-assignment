import React from 'react'
import './App.css';
import { connect } from 'react-redux';
import { createtag } from '../src/actions/index';

class SkillTags extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: []
    };
  }

  removeTag = (i) => {
    const newTags = [...this.state.tags];
    newTags.splice(i, 1);
    this.setState({ tags: newTags });
  }

  inputKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === 'Shift' && val) {
      if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      this.setState({ tags: [...this.state.tags, val] });
      this.tagInput.value = null;
    } else if (e.key === 'Backspace' && !val) {
      this.removeTag(this.state.tags.length - 1);
    }
  }
  // handletags = e => {
  //   e.preventDefault();
  //   if (this.state.tags === "")
  //     console.log(this.state)
  //   this.props.createtag(this.state)
  // }
  // handletagsinput = event => {
  //   this.setState({ tags: event.target.value })
  // }

  render() {
    const { tags } = this.state;

    return (
      <>
        <div className="input-tag border border-dark rounded font-weight-italic">
          <ul className="input-tag__tags">
            {tags.map((tag, i) => (
              <li key={tag}>
                {tag}
                <button type="button" onClick={() => { this.removeTag(i); }}>+</button>
              </li>
            ))}
            <li className=" border-dark input-tag__tags__input">
              <input className='border-dark font-weight-italic skill-input'
                placeholder="Enter your Skills"
                type="text"
                onChange={this.handletagsinput}
                onKeyDown={this.inputKeyDown}
                ref={c => { this.tagInput = c; }} />
            </li>
          </ul>
          <button className="done" onClick={this.handletags}>Done</button>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    tags: state.tags
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createtag: (data) => dispatch(createtag(data))
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(SkillTags);