import React, { Component } from 'react';

class Selection extends Component {
  render() {
    return (
      <>
        <div className='container text-center'>
          <div>
            <label className='m-1'>From</label>

            <select
              className='m-1'
              value={this.props.yearFrom}
              onChange={this.props.onChangeYearFrom}
            >
              <option value='2001'>2001</option>
              <option value='2002'>2002</option>
              <option value='2003'>2003</option>
              <option value='2004'>2004</option>
              <option value='2005'>2005</option>
              <option value='2006'>2006</option>
              <option value='2007'>2007</option>
              <option value='2008'>2008</option>
              <option value='2009'>2009</option>
              <option value='2010'>2010</option>
              <option value='2011'>2011</option>
              <option value='2012'>2012</option>
              <option value='2013'>2013</option>
              <option value='2014'>2014</option>
              <option value='2015'>2015</option>
            </select>
            <label className='m-1'>to</label>
            <select
              value={this.props.yearTo}
              onChange={this.props.onChangeYearTo}
            >
              <option value='2001'>2001</option>
              <option value='2002'>2002</option>
              <option value='2003'>2003</option>
              <option value='2004'>2004</option>
              <option value='2005'>2005</option>
              <option value='2006'>2006</option>
              <option value='2007'>2007</option>
              <option value='2008'>2008</option>
              <option value='2009'>2009</option>
              <option value='2010'>2010</option>
              <option value='2011'>2011</option>
              <option value='2012'>2012</option>
              <option value='2013'>2013</option>
              <option value='2014'>2014</option>
              <option value='2015'>2015</option>
            </select>
            <button
              onClick={this.props.onSubmit}
              type='button'
              className='btn btn-primary btn-m m-3'
            >
              Submit
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Selection;
