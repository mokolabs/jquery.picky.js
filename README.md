# jquery.picky.js

Picky is a jQuery plugin that provides simple client-side date validation when entering dates using select tags.

### Features

Instead of giving users annoying messages about invalid dates, Picky seamlessly prevents users from entering bad dates in the first place. It does this by automatically updating day select options with the correct number of days for the selected month and year.

### How does it work?

Picky piggybacks on the Date object in Javascript. Each time a select value changes, the plugin will verify the selected date is a valid Date object. If not, it will decrement the day value until a valid date within the selected month and year is found.

### Installation

- Download the plugin from git@github.com:mokolabs/picky.git
- Copy jquery.picky.js into your javascript directory
- Add jquery.picky.js to your document head

### Usage

    <script>
      $(document).ready(function () {
        $(".date").picky();
      });
  	</script>
  
### Sample markup

By default, jquery.picky.js uses a date class selector, with three nested select tags that use year, month, and day class selectors:

    <p class="date">
      <select class="year"></select>
      <select class="month"></select>
      <select class="day"></select>
    </p>

The date class can be customized. The year, month, and day classes are required but can be ordered in any way, provided they remain nested under the primary date class (or its customized equivalent).

Here's a full markup example:

    <form action="post" target="demo.html">
      <p class="date">
        <select class="year">
          <option value="2000">2000</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
        </select>
        <select class="month">
          <option value="1">Jan</option>
          <option value="2">Feb</option>
          <option value="3">Mar</option>
          <option value="4">Apr</option>
          <option value="5">May</option>
          <option value="6">Jun</option>
          <option value="7">Jul</option>
          <option value="8">Aug</option>
          <option value="9">Sep</option>
          <option value="10">Oct</option>
          <option value="11">Nov</option>
          <option value="12">Dec</option>
        </select>
        <select class="day">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
      </p>
    </form>
    
### Demo

- Open demo.html in your browser

### FAQ

Q. Do I have to use select tags for date selectors?

A. Yes. Picky is designed for use with select tags. If you need something more complex, Picky isn't right for you.

Q. Can I use Picky with dates before the year 2000?

A. Yes. The dates above (and in the demo) are just examples. You are welcome to define your own year ranges, either manually or programmatically if you're using a web framework to generate your views.
