import React from "react";

export default class Add extends React.Component{
    constructor(props) {
        super(props);
        this.state={cv:'',major:'',sex:'female'};
    }

    handleCVchange=(e)=>{
        this.setState({cv:e.target.value});
    }


    handlemajor=(e)=>{
        this.setState({major:e.target.value});
    }

    handlebtn=()=>{
        console.log(this.state.cv);
        console.log(this.state.major);
        console.log(this.state.sex);


    }

    handleautoselect=(e)=>{
       this.setState({major:e.target.value})
    }

    handlesex=(e)=>{
        this.setState({sex:e.target.value})
    }

    render() {

        return(
            <form>
                <label>CV</label>
                <textarea onChange={this.handleCVchange}/>
                <select onChange={this.handlemajor} value={this.state.major}>
                    <option>please select major</option>
                    <option value="CS">CS</option>
                    <option value="CE">CE</option>
                </select>
                <textarea value={this.state.cv}/>

                <label>
                    <input type="radio" value='male' name="sex" onChange={this.handlesex} checked={this.state.sex==='male'} />
                    male
                </label>

                <label>
                    <input type="radio" value='female' name="sex" onChange={this.handlesex} checked={this.state.sex==='female'} />
                    female
                </label>


                <input type="button" value="add" onClick={this.handlebtn} />
                <input type="button" value="CS" onClick={this.handleautoselect} />
                <input type="button" value="CE" onClick={this.handleautoselect} />

            </form>

        )
    }

}