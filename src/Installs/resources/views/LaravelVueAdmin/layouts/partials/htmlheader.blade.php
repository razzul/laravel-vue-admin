<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
    <title>@hasSection('htmlheader_title')@yield('htmlheader_title') - @endif{{ LvConfigs::getByKey('sitename') }}</title>
    <link rel="stylesheet" href="{{ asset('LaravelVueAdmin/assets/css/vendor.css') }}" />
    <link href="{{ asset('LaravelVueAdmin/assets/css/app-'.LvConfigs::getByKey('skin').'.css') }}" rel="stylesheet" type="text/css" />

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
<style>
img.topnav-img, .user-avatar{
  border-radius: 50%;
}
.tr-access-adv table.table-bordered.dataTable th:last-child, table.table-bordered.dataTable th:last-child, table.table-bordered.dataTable td:last-child, table.table-bordered.dataTable td:last-child{
  border-right-width: 1px !important;
}
.tr-access-adv table.table-bordered.dataTable tbody th, table.table-bordered.dataTable tbody td {
  border-bottom-width: 1px !important;
}
/* margin and padding */
.m30 {
  margin: 30px;
}
.mt30 {
  margin-top: 30px;
}
.mr30 {
  margin-right: 30px;
}
.mb30 {
  margin-bottom: 30px;
}
.ml30 {
  margin-left: 30px;
}
.p30 {
  padding: 30px;
}
.pt30 {
  padding-top: 30px;
}
.pr30 {
  padding-right: 30px;
}
.pb30 {
  padding-bottom: 30px;
}
.pl30 {
  padding-left: 30px;
}
.m25 {
  margin: 25px;
}
.mt25 {
  margin-top: 25px;
}
.mr25 {
  margin-right: 25px;
}
.mb25 {
  margin-bottom: 25px;
}
.ml25 {
  margin-left: 25px;
}
.p25 {
  padding: 25px;
}
.pt25 {
  padding-top: 25px;
}
.pr25 {
  padding-right: 25px;
}
.pb25 {
  padding-bottom: 25px;
}
.pl25 {
  padding-left: 25px;
}
.m20 {
  margin: 20px;
}
.mt20 {
  margin-top: 20px;
}
.mr20 {
  margin-right: 20px;
}
.mb20 {
  margin-bottom: 20px;
}
.ml20 {
  margin-left: 20px;
}
.p20 {
  padding: 20px;
}
.pt20 {
  padding-top: 20px;
}
.pr20 {
  padding-right: 20px;
}
.pb20 {
  padding-bottom: 20px;
}
.pl20 {
  padding-left: 20px;
}
.m15 {
  margin: 15px;
}
.mt15 {
  margin-top: 15px;
}
.mr15 {
  margin-right: 15px;
}
.mb15 {
  margin-bottom: 15px;
}
.ml15 {
  margin-left: 15px;
}
.p15 {
  padding: 15px;
}
.pt15 {
  padding-top: 15px;
}
.pr15 {
  padding-right: 15px;
}
.pb15 {
  padding-bottom: 15px;
}
.pl15 {
  padding-left: 15px;
}
.m10 {
  margin: 10px;
}
.mt10 {
  margin-top: 10px;
}
.mr10 {
  margin-right: 10px;
}
.mb10 {
  margin-bottom: 10px;
}
.ml10 {
  margin-left: 10px;
}
.p10 {
  padding: 10px;
}
.pt10 {
  padding-top: 10px;
}
.pr10 {
  padding-right: 10px;
}
.pb10 {
  padding-bottom: 10px;
}
.pl10 {
  padding-left: 10px;
}
.m5 {
  margin: 5px;
}
.mt5 {
  margin-top: 5px;
}
.mr5 {
  margin-right: 5px;
}
.mb5 {
  margin-bottom: 5px;
}
.ml5 {
  margin-left: 5px;
}
.p5 {
  padding: 5px;
}
.pt5 {
  padding-top: 5px;
}
.pr5 {
  padding-right: 5px;
}
.pb5 {
  padding-bottom: 5px;
}
.pl5 {
  padding-left: 5px;
}
.m0 {
  margin: 0px;
}
.mt0 {
  margin-top: 0px;
}
.mr0 {
  margin-right: 0px;
}
.mb0 {
  margin-bottom: 0px;
}
.ml0 {
  margin-left: 0px;
}
.p0 {
  padding: 0px;
}
.pt0 {
  padding-top: 0px;
}
.pr0 {
  padding-right: 0px;
}
.pb0 {
  padding-bottom: 0px;
}
.pl0 {
  padding-left: 0px;
}
.text-white {
  color: #fff !important;
}
/*
 * Component: Form
 * ---------------
 */
.form-control {
  border-radius: 0;
  box-shadow: none;
  border-color: #d2d6de;
}
.form-control:focus {
  border-color: #48B0F7;
  box-shadow: none;
}
.form-control::-moz-placeholder,
.form-control:-ms-input-placeholder,
.form-control::-webkit-input-placeholder {
  color: #bbb;
  opacity: 1;
}
.form-control:not(select) {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.form-group.has-success label {
  color: #10cfbd;
}
.form-group.has-success .form-control {
  border-color: #10cfbd;
  box-shadow: none;
}
.form-group.has-warning label {
  color: #f39c12;
}
.form-group.has-warning .form-control {
  border-color: #f39c12;
  box-shadow: none;
}
.form-group.has-error label {
  color: #f55753;
}
.form-group.has-error .form-control {
  border-color: #f55753;
  box-shadow: none;
}
label.error {
  color: #FF6262;
  font-weight: 400;
  margin-top: 2px;
}
.form-control.error {
  border-color: #FF6262;
}
/*
 * Plugin: Select2
 * ---------------
 */
.select2-container {
  box-sizing: border-box;
  display: block;
  margin: 0;
  position: relative;
  vertical-align: middle;
  width: 100% !important;
}
.select2-container .select2-selection--single {
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  height: 31px;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-select: none;
}
.select2-container .select2-selection--single .select2-selection__rendered {
  display: block;
  padding-left: 8px;
  padding-right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.select2-container .select2-selection--single .select2-selection__clear {
  position: relative;
}
.select2-container[dir="rtl"] .select2-selection--single .select2-selection__rendered {
  padding-right: 8px;
  padding-left: 20px;
}
.select2-container .select2-selection--multiple {
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  min-height: 32px;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-select: none;
}
.select2-container .select2-selection--multiple .select2-selection__rendered {
  display: inline-block;
  overflow: hidden;
  padding-left: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.select2-container .select2-search--inline {
  float: left;
}
.select2-container .select2-search--inline .select2-search__field {
  box-sizing: border-box;
  border: none;
  font-size: 100%;
  margin-top: 5px;
  padding: 0;
}
.select2-container .select2-search--inline .select2-search__field::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
.select2-dropdown {
  background-color: white;
  border: 1px solid #aaa;
  border-radius: 4px;
  box-sizing: border-box;
  display: block;
  position: absolute;
  left: -100000px;
  width: 100%;
  z-index: 1051;
}
.select2-results {
  display: block;
}
.select2-results__options {
  list-style: none;
  margin: 0;
  padding: 0;
}
.select2-results__option {
  padding: 6px;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-select: none;
}
.select2-results__option[aria-selected] {
  cursor: pointer;
}
.select2-container--open .select2-dropdown {
  left: 0;
}
.select2-container--open .select2-dropdown--above {
  border-bottom: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.select2-container--open .select2-dropdown--below {
  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.select2-search--dropdown {
  display: block;
  padding: 4px;
}
.select2-search--dropdown .select2-search__field {
  padding: 4px;
  width: 100%;
  box-sizing: border-box;
}
.select2-search--dropdown .select2-search__field::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
.select2-search--dropdown.select2-search--hide {
  display: none;
}
.select2-close-mask {
  border: 0;
  margin: 0;
  padding: 0;
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  min-height: 100%;
  min-width: 100%;
  height: auto;
  width: auto;
  opacity: 0;
  z-index: 99;
  background-color: #fff;
  filter: alpha(opacity=0);
}
.select2-hidden-accessible {
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
}
.select2-container--default .select2-selection--single {
  background-color: #fff;
  border: 1px solid #D2D6DE;
  border-radius: 4px;
}
.select2-container--default .select2-selection--single .select2-selection__rendered {
  color: #444;
  line-height: 28px;
}
.select2-container--default .select2-selection--single .select2-selection__clear {
  cursor: pointer;
  float: right;
  font-weight: bold;
}
.select2-container--default .select2-selection--single .select2-selection__placeholder {
  color: #999;
}
.select2-container--default .select2-selection--single .select2-selection__arrow {
  height: 26px;
  position: absolute;
  top: 1px;
  right: 1px;
  width: 20px;
}
.select2-container--default .select2-selection--single .select2-selection__arrow b {
  border-color: #888 transparent transparent transparent;
  border-style: solid;
  border-width: 5px 4px 0 4px;
  height: 0;
  left: 50%;
  margin-left: -4px;
  margin-top: -2px;
  position: absolute;
  top: 50%;
  width: 0;
}
.select2-container--default[dir="rtl"] .select2-selection--single .select2-selection__clear {
  float: left;
}
.select2-container--default[dir="rtl"] .select2-selection--single .select2-selection__arrow {
  left: 1px;
  right: auto;
}
.select2-container--default.select2-container--disabled .select2-selection--single {
  background-color: #eee;
  cursor: default;
}
.select2-container--default.select2-container--disabled .select2-selection--single .select2-selection__clear {
  display: none;
}
.select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow b {
  border-color: transparent transparent #888 transparent;
  border-width: 0 4px 5px 4px;
}
.select2-container--default .select2-selection--multiple {
  background-color: white;
  border: 1px solid #D2D6DE;
  border-radius: 4px;
  cursor: text;
}
.select2-container--default .select2-selection--multiple .select2-selection__rendered {
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0 5px;
  width: 100%;
}
.select2-container--default .select2-selection--multiple .select2-selection__rendered li {
  list-style: none;
}
.select2-container--default .select2-selection--multiple .select2-selection__placeholder {
  color: #999;
  margin-top: 5px;
  float: left;
}
.select2-container--default .select2-selection--multiple .select2-selection__clear {
  cursor: pointer;
  float: right;
  font-weight: bold;
  margin-top: 5px;
  margin-right: 10px;
}
.select2-container--default .select2-selection--multiple .select2-selection__choice {
  background-color: #e4e4e4;
  border: 1px solid #aaa;
  border-radius: 4px;
  cursor: default;
  float: left;
  margin-right: 5px;
  margin-top: 5px;
  padding: 0 5px;
}
.select2-container--default .select2-selection--multiple .select2-selection__choice__remove {
  color: #999;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  margin-left: 4px;
  float: right;
  font-size: 16px;
  line-height: 20px;
}
.select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover {
  color: #333;
}
.select2-container--default[dir="rtl"] .select2-selection--multiple .select2-selection__choice,
.select2-container--default[dir="rtl"] .select2-selection--multiple .select2-selection__placeholder,
.select2-container--default[dir="rtl"] .select2-selection--multiple .select2-search--inline {
  float: right;
}
.select2-container--default[dir="rtl"] .select2-selection--multiple .select2-selection__choice {
  margin-left: 5px;
  margin-right: auto;
}
.select2-container--default[dir="rtl"] .select2-selection--multiple .select2-selection__choice__remove {
  margin-left: 2px;
  margin-right: auto;
}
.select2-container--default.select2-container--focus .select2-selection--multiple {
  border: solid #D2D6DE 1px;
  outline: 0;
}
.select2-container--default.select2-container--disabled .select2-selection--multiple {
  background-color: #eee;
  cursor: default;
}
.select2-container--default.select2-container--disabled .select2-selection__choice__remove {
  display: none;
}
.select2-container--default.select2-container--open.select2-container--above .select2-selection--single,
.select2-container--default.select2-container--open.select2-container--above .select2-selection--multiple {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.select2-container--default.select2-container--open.select2-container--below .select2-selection--single,
.select2-container--default.select2-container--open.select2-container--below .select2-selection--multiple {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.select2-container--default .select2-search--dropdown .select2-search__field {
  border: 1px solid #aaa;
}
.select2-container--default .select2-search--inline .select2-search__field {
  background: transparent;
  border: none;
  outline: 0;
  box-shadow: none;
  -webkit-appearance: textfield;
}
.select2-container--default .select2-results > .select2-results__options {
  max-height: 200px;
  overflow-y: auto;
}
.select2-container--default .select2-results__option[role=group] {
  padding: 0;
}
.select2-container--default .select2-results__option[aria-disabled=true] {
  color: #999;
}
.select2-container--default .select2-results__option[aria-selected=true] {
  background-color: #ddd;
}
.select2-container--default .select2-results__option .select2-results__option {
  padding-left: 1em;
}
.select2-container--default .select2-results__option .select2-results__option .select2-results__group {
  padding-left: 0;
}
.select2-container--default .select2-results__option .select2-results__option .select2-results__option {
  margin-left: -1em;
  padding-left: 2em;
}
.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option {
  margin-left: -2em;
  padding-left: 3em;
}
.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {
  margin-left: -3em;
  padding-left: 4em;
}
.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {
  margin-left: -4em;
  padding-left: 5em;
}
.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {
  margin-left: -5em;
  padding-left: 6em;
}
.select2-container--default .select2-results__option--highlighted[aria-selected] {
  background-color: #5897fb;
  color: white;
}
.select2-container--default .select2-results__group {
  cursor: default;
  display: block;
  padding: 6px;
}
.select2-container--classic .select2-selection--single {
  background-color: #f7f7f7;
  border: 1px solid #aaa;
  border-radius: 4px;
  outline: 0;
  background-image: linear-gradient(to bottom, white 50%, #eeeeee 100%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF', endColorstr='#FFEEEEEE', GradientType=0);
}
.select2-container--classic .select2-selection--single:focus {
  border: 1px solid #5897fb;
}
.select2-container--classic .select2-selection--single .select2-selection__rendered {
  color: #444;
  line-height: 28px;
}
.select2-container--classic .select2-selection--single .select2-selection__clear {
  cursor: pointer;
  float: right;
  font-weight: bold;
  margin-right: 10px;
}
.select2-container--classic .select2-selection--single .select2-selection__placeholder {
  color: #999;
}
.select2-container--classic .select2-selection--single .select2-selection__arrow {
  background-color: #ddd;
  border: none;
  border-left: 1px solid #aaa;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  height: 26px;
  position: absolute;
  top: 1px;
  right: 1px;
  width: 20px;
  background-image: linear-gradient(to bottom, #eeeeee 50%, #cccccc 100%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEEEEEE', endColorstr='#FFCCCCCC', GradientType=0);
}
.select2-container--classic .select2-selection--single .select2-selection__arrow b {
  border-color: #888 transparent transparent transparent;
  border-style: solid;
  border-width: 5px 4px 0 4px;
  height: 0;
  left: 50%;
  margin-left: -4px;
  margin-top: -2px;
  position: absolute;
  top: 50%;
  width: 0;
}
.select2-container--classic[dir="rtl"] .select2-selection--single .select2-selection__clear {
  float: left;
}
.select2-container--classic[dir="rtl"] .select2-selection--single .select2-selection__arrow {
  border: none;
  border-right: 1px solid #aaa;
  border-radius: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  left: 1px;
  right: auto;
}
.select2-container--classic.select2-container--open .select2-selection--single {
  border: 1px solid #5897fb;
}
.select2-container--classic.select2-container--open .select2-selection--single .select2-selection__arrow {
  background: transparent;
  border: none;
}
.select2-container--classic.select2-container--open .select2-selection--single .select2-selection__arrow b {
  border-color: transparent transparent #888 transparent;
  border-width: 0 4px 5px 4px;
}
.select2-container--classic.select2-container--open.select2-container--above .select2-selection--single {
  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-image: linear-gradient(to bottom, white 0%, #eeeeee 50%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF', endColorstr='#FFEEEEEE', GradientType=0);
}
.select2-container--classic.select2-container--open.select2-container--below .select2-selection--single {
  border-bottom: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-image: linear-gradient(to bottom, #eeeeee 50%, white 100%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEEEEEE', endColorstr='#FFFFFFFF', GradientType=0);
}
.select2-container--classic .select2-selection--multiple {
  background-color: white;
  border: 1px solid #aaa;
  border-radius: 4px;
  cursor: text;
  outline: 0;
}
.select2-container--classic .select2-selection--multiple:focus {
  border: 1px solid #5897fb;
}
.select2-container--classic .select2-selection--multiple .select2-selection__rendered {
  list-style: none;
  margin: 0;
  padding: 0 5px;
}
.select2-container--classic .select2-selection--multiple .select2-selection__clear {
  display: none;
}
.select2-container--classic .select2-selection--multiple .select2-selection__choice {
  background-color: #e4e4e4;
  border: 1px solid #aaa;
  border-radius: 4px;
  cursor: default;
  float: left;
  margin-right: 5px;
  margin-top: 5px;
  padding: 0 5px;
}
.select2-container--classic .select2-selection--multiple .select2-selection__choice__remove {
  color: #888;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  margin-right: 2px;
}
.select2-container--classic .select2-selection--multiple .select2-selection__choice__remove:hover {
  color: #555;
}
.select2-container--classic[dir="rtl"] .select2-selection--multiple .select2-selection__choice {
  float: right;
}
.select2-container--classic[dir="rtl"] .select2-selection--multiple .select2-selection__choice {
  margin-left: 5px;
  margin-right: auto;
}
.select2-container--classic[dir="rtl"] .select2-selection--multiple .select2-selection__choice__remove {
  margin-left: 2px;
  margin-right: auto;
}
.select2-container--classic.select2-container--open .select2-selection--multiple {
  border: 1px solid #5897fb;
}
.select2-container--classic.select2-container--open.select2-container--above .select2-selection--multiple {
  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.select2-container--classic.select2-container--open.select2-container--below .select2-selection--multiple {
  border-bottom: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.select2-container--classic .select2-search--dropdown .select2-search__field {
  border: 1px solid #aaa;
  outline: 0;
}
.select2-container--classic .select2-search--inline .select2-search__field {
  outline: 0;
  box-shadow: none;
}
.select2-container--classic .select2-dropdown {
  background-color: white;
  border: 1px solid transparent;
}
.select2-container--classic .select2-dropdown--above {
  border-bottom: none;
}
.select2-container--classic .select2-dropdown--below {
  border-top: none;
}
.select2-container--classic .select2-results > .select2-results__options {
  max-height: 200px;
  overflow-y: auto;
}
.select2-container--classic .select2-results__option[role=group] {
  padding: 0;
}
.select2-container--classic .select2-results__option[aria-disabled=true] {
  color: grey;
}
.select2-container--classic .select2-results__option--highlighted[aria-selected] {
  background-color: #3875d7;
  color: white;
}
.select2-container--classic .select2-results__group {
  cursor: default;
  display: block;
  padding: 6px;
}
.select2-container--classic.select2-container--open .select2-dropdown {
  border-color: #5897fb;
}
/* margin and padding ends */
/*bg*/
.bg-white {
  background: #fff !important;
}
.bg-off-white {
  background: #f2f4f6;
}
/*
 * General: Miscellaneous
 * ----------------------
 */
.pad {
  padding: 10px;
}
.margin {
  margin: 10px;
}
.margin-bottom {
  margin-bottom: 20px;
}
.margin-bottom-none {
  margin-bottom: 0;
}
.margin-r-5 {
  margin-right: 5px;
}
.inline {
  display: inline;
}
.description-block {
  display: block;
  margin: 10px 0;
  text-align: center;
}
.description-block.margin-bottom {
  margin-bottom: 25px;
}
.description-block > .description-header {
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 16px;
}
.description-block > .description-text {
  text-transform: uppercase;
}
.bg-red,
.bg-yellow,
.bg-aqua,
.bg-blue,
.bg-light-blue,
.bg-green,
.bg-navy,
.bg-teal,
.bg-olive,
.bg-lime,
.bg-orange,
.bg-fuchsia,
.bg-purple,
.bg-maroon,
.bg-black,
.bg-red-active,
.bg-yellow-active,
.bg-aqua-active,
.bg-blue-active,
.bg-light-blue-active,
.bg-green-active,
.bg-navy-active,
.bg-teal-active,
.bg-olive-active,
.bg-lime-active,
.bg-orange-active,
.bg-fuchsia-active,
.bg-purple-active,
.bg-maroon-active,
.bg-black-active,
.callout.callout-danger,
.callout.callout-warning,
.callout.callout-info,
.callout.callout-success,
.alert-success,
.alert-danger,
.alert-error,
.alert-warning,
.alert-info,
.label-danger,
.label-info,
.label-warning,
.label-primary,
.label-success,
.modal-primary .modal-body,
.modal-primary .modal-header,
.modal-primary .modal-footer,
.modal-warning .modal-body,
.modal-warning .modal-header,
.modal-warning .modal-footer,
.modal-info .modal-body,
.modal-info .modal-header,
.modal-info .modal-footer,
.modal-success .modal-body,
.modal-success .modal-header,
.modal-success .modal-footer,
.modal-danger .modal-body,
.modal-danger .modal-header,
.modal-danger .modal-footer {
  color: #fff !important;
}
.bg-gray {
  color: #000;
  background-color: #d2d6de !important;
}
.bg-gray-light {
  background-color: #f7f7f7;
}
.bg-black {
  background-color: #111 !important;
}
.bg-red,
.callout.callout-danger,
.alert-danger,
.alert-error,
.label-danger,
.modal-danger .modal-body {
  background-color: #f55753 !important;
}
.bg-yellow,
.callout.callout-warning,
.alert-warning,
.label-warning,
.modal-warning .modal-body {
  background-color: #f39c12 !important;
}
.bg-aqua,
.callout.callout-info,
.alert-info,
.label-info,
.modal-info .modal-body {
  background-color: #48b0f7 !important;
}
.bg-blue {
  background-color: #48B0F7 !important;
}

.bg-green,
.callout.callout-success,
.alert-success,
.label-success,
.modal-success .modal-body {
  background-color: #10cfbd !important;
}
.bg-navy {
  background-color: #001F3F !important;
}
.bg-teal {
  background-color: #39CCCC !important;
}
.bg-olive {
  background-color: #3D9970 !important;
}
.bg-lime {
  background-color: #01FF70 !important;
}
.bg-orange {
  background-color: #FF851B !important;
}
.bg-fuchsia {
  background-color: #F012BE !important;
}
.bg-purple {
  background-color: #605ca8 !important;
}
.bg-maroon {
  background-color: #D81B60 !important;
}
.bg-gray-active {
  color: #000;
  background-color: #b5bbc8 !important;
}
.bg-black-active {
  background-color: #000000 !important;
}
.bg-red-active,
.modal-danger .modal-header,
.modal-danger .modal-footer {
  background-color: #f33b36 !important;
}
.bg-yellow-active,
.modal-warning .modal-header,
.modal-warning .modal-footer {
  background-color: #db8b0b !important;
}
.bg-aqua-active,
.modal-info .modal-header,
.modal-info .modal-footer {
  background-color: #2ba3f6 !important;
}
.bg-blue-active {
  background-color: #179bf5 !important;
}
.bg-light-blue-active,
.modal-primary .modal-header,
.modal-primary .modal-footer {
  background-color: #2ba3f6 !important;
}
.bg-green-active,
.modal-success .modal-header,
.modal-success .modal-footer {
  background-color: #0eb7a7 !important;
}
.bg-navy-active {
  background-color: #001a35 !important;
}
.bg-teal-active {
  background-color: #30bbbb !important;
}
.bg-olive-active {
  background-color: #368763 !important;
}
.bg-lime-active {
  background-color: #00e765 !important;
}
.bg-orange-active {
  background-color: #ff7701 !important;
}
.bg-fuchsia-active {
  background-color: #db0ead !important;
}
.bg-purple-active {
  background-color: #555299 !important;
}
.bg-maroon-active {
  background-color: #ca195a !important;
}
[class^="bg-"].disabled {
  opacity: 0.65;
  filter: alpha(opacity=65);
}
.text-red {
  color: #f55753 !important;
}
.text-yellow {
  color: #f39c12 !important;
}
.text-aqua {
  color: #48b0f7 !important;
}
.text-blue {
  color: #48B0F7 !important;
}
.text-black {
  color: #111 !important;
}
.text-light-blue {
  color: #48B0F7 !important;
}
.text-green {
  color: #10cfbd !important;
}
.text-gray {
  color: #d2d6de !important;
}
.text-navy {
  color: #001F3F !important;
}
.text-teal {
  color: #39CCCC !important;
}
.text-olive {
  color: #3D9970 !important;
}
.text-lime {
  color: #01FF70 !important;
}
.text-orange {
  color: #FF851B !important;
}
.text-fuchsia {
  color: #F012BE !important;
}
.text-purple {
  color: #605ca8 !important;
}
.text-maroon {
  color: #D81B60 !important;
}
.link-muted {
  color: #7a869d;
}
.link-muted:hover,
.link-muted:focus {
  color: #606c84;
}
.link-black {
  color: #666;
}
.link-black:hover,
.link-black:focus {
  color: #999;
}
.hide {
  display: none !important;
}
.no-border {
  border: 0 !important;
}
.no-padding {
  padding: 0 !important;
}
.no-margin {
  margin: 0 !important;
}
.no-shadow {
  box-shadow: none !important;
}


.list-unstyled,
.chart-legend,
.contacts-list,
.users-list,
.mailbox-attachments {
  list-style: none;
  margin: 0;
  padding: 0;
}
.list-group-unbordered > .list-group-item {
  border-left: 0;
  border-right: 0;
  border-radius: 0;
  padding-left: 0;
  padding-right: 0;
}
.flat {
  border-radius: 0 !important;
}
.text-bold,
.text-bold.table td,
.text-bold.table th {
  font-weight: 700;
}
.text-sm {
  font-size: 12px;
}
.jqstooltip {
  padding: 5px !important;
  width: auto !important;
  height: auto !important;
}
.bg-teal-gradient {
  background: #39CCCC !important;
  background: -o-linear-gradient(#7adddd, #39CCCC) !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#7adddd', endColorstr='#39CCCC', GradientType=0) !important;
  color: #fff;
}
.bg-light-blue-gradient {
  background: #48B0F7 !important;
  background: -o-linear-gradient(#83c9fa, #48B0F7) !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#83c9fa', endColorstr='#48B0F7', GradientType=0) !important;
  color: #fff;
}
.bg-blue-gradient {
  background: #48B0F7 !important;
  background: -o-linear-gradient(#6abff8, #48B0F7) !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#6abff8', endColorstr='#48B0F7', GradientType=0) !important;
  color: #fff;
}
.bg-aqua-gradient {
  background: #48b0f7 !important;
  background: -o-linear-gradient(#6abff8, #48b0f7) !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#6abff8', endColorstr='#48b0f7', GradientType=0) !important;
  color: #fff;
}
.bg-yellow-gradient {
  background: #f39c12 !important;
  background: -o-linear-gradient(#f7bc60, #f39c12) !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f7bc60', endColorstr='#f39c12', GradientType=0) !important;
  color: #fff;
}
.bg-purple-gradient {
  background: #605ca8 !important;
  background: -o-linear-gradient(#9491c4, #605ca8) !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#9491c4', endColorstr='#605ca8', GradientType=0) !important;
  color: #fff;
}
.bg-green-gradient {
  background: #10cfbd !important;
  background: -o-linear-gradient(#16edd9, #10cfbd) !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#16edd9', endColorstr='#10cfbd', GradientType=0) !important;
  color: #fff;
}
.bg-red-gradient {
  background: #f55753 !important;
  background: -o-linear-gradient(#f88683, #f55753) !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f88683', endColorstr='#f55753', GradientType=0) !important;
  color: #fff;
}
.bg-black-gradient {
  background: #111 !important;
  background: -o-linear-gradient(#2b2b2b, #111) !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#2b2b2b', endColorstr='#111', GradientType=0) !important;
  color: #fff;
}
.bg-maroon-gradient {
  background: #D81B60 !important;
  background: -o-linear-gradient(#e73f7c, #D81B60) !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e73f7c', endColorstr='#D81B60', GradientType=0) !important;
  color: #fff;
}
.description-block .description-icon {
  font-size: 16px;
}
.no-pad-top {
  padding-top: 0;
}
.position-static {
  position: static !important;
}
.list-header {
  font-size: 15px;
  padding: 10px 4px;
  font-weight: bold;
  color: #666;
}
.list-seperator {
  height: 1px;
  background: #f4f4f4;
  margin: 15px 0 9px 0;
}
.list-link > a {
  padding: 4px;
  color: #777;
}
.list-link > a:hover {
  color: #222;
}
.font-light {
  font-weight: 300;
}
.user-block:before,
.user-block:after {
  content: " ";
  display: table;
}
.user-block:after {
  clear: both;
}
.user-block img {
  width: 40px;
  height: 40px;
  float: left;
}
.user-block .username,
.user-block .description,
.user-block .comment {
  display: block;
  margin-left: 50px;
}
.user-block .username {
  font-size: 16px;
  font-weight: 600;
}
.user-block .description {
  color: #999;
  font-size: 13px;
}
.user-block.user-block-sm .username,
.user-block.user-block-sm .description,
.user-block.user-block-sm .comment {
  margin-left: 40px;
}
.user-block.user-block-sm .username {
  font-size: 14px;
}
.img-sm,
.img-md,
.img-lg,
.box-comments .box-comment img,
.user-block.user-block-sm img {
  float: left;
}
.img-sm,
.box-comments .box-comment img,
.user-block.user-block-sm img {
  width: 30px !important;
  height: 30px !important;
}
.img-sm + .img-push {
  margin-left: 40px;
}
.img-md {
  width: 60px;
  height: 60px;
}
.img-md + .img-push {
  margin-left: 70px;
}
.img-lg {
  width: 100px;
  height: 100px;
}
.img-lg + .img-push {
  margin-left: 110px;
}
.img-bordered {
  border: 3px solid #d2d6de;
  padding: 3px;
}
.img-bordered-sm {
  border: 2px solid #d2d6de;
  padding: 2px;
}
.attachment-block {
  border: 1px solid #f4f4f4;
  padding: 5px;
  margin-bottom: 10px;
  background: #f7f7f7;
}
.attachment-block .attachment-img {
  max-width: 100px;
  max-height: 100px;
  height: auto;
  float: left;
}
.attachment-block .attachment-pushed {
  margin-left: 110px;
}
.attachment-block .attachment-heading {
  margin: 0;
}
.attachment-block .attachment-text {
  color: #555;
}
.connectedSortable {
  min-height: 100px;
}
.ui-helper-hidden-accessible {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.sort-highlight {
  background: #f4f4f4;
  border: 1px dashed #ddd;
  margin-bottom: 10px;
}
.full-opacity-hover {
  opacity: 0.65;
  filter: alpha(opacity=65);
}
.full-opacity-hover:hover {
  opacity: 1;
  filter: alpha(opacity=100);
}
.chart {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.chart svg,
.chart canvas {
  width: 100% !important;
}
/*
 * Component: Timeline
 * -------------------
 */
.timeline {
  position: relative;
  margin: 0 0 30px 0;
  padding: 20px 8px;
  list-style: none;
}
.timeline:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #ddd;
  left: 40px;
  margin: 0;
  border-radius: 2px;
}
.timeline > li {
  position: relative;
  margin-right: 10px;
  margin-bottom: 15px;
}
.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}
.timeline > li:after {
  clear: both;
}
.timeline > li > .timeline-item {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin-top: 0;
  background: #fff;
  color: #444;
  margin-left: 60px;
  margin-right: 15px;
  padding: 0;
  position: relative;
}
.timeline > li > .timeline-item > .time {
  color: #999;
  float: right;
  padding: 10px;
  font-size: 12px;
}
.timeline > li > .timeline-item > .timeline-header {
  margin: 0;
  color: #555;
  border-bottom: 1px solid #f4f4f4;
  padding: 10px;
  font-size: 16px;
  line-height: 1.1;
}
.timeline > li > .timeline-item > .timeline-header > a {
  font-weight: 600;
}
.timeline > li > .timeline-item > .timeline-body,
.timeline > li > .timeline-item > .timeline-footer {
  padding: 10px;
}
.timeline > li > .fa,
.timeline > li > .glyphicon,
.timeline > li > .ion {
  width: 30px;
  height: 30px;
  font-size: 15px;
  line-height: 30px;
  position: absolute;
  color: #666;
  background: #d2d6de;
  border-radius: 50%;
  text-align: center;
  left: 18px;
  top: 0;
}
.timeline > .time-label > span {
  font-weight: 600;
  padding: 5px;
  display: inline-block;
  background-color: #fff;
  border-radius: 4px;
}
.timeline-inverse > li > .timeline-item {
  background: #f0f0f0;
  border: 1px solid #ddd;
  box-shadow: none;
}
.timeline-inverse > li > .timeline-item > .timeline-header {
  border-bottom-color: #ddd;
}
.headerElems {
  display: block;
  margin-bottom: 15px;
  text-align: right;
}
/*
 * Component: Box
 * --------------
 */
.box {
  position: relative;
  border-radius: 3px;
  background: #ffffff;
  border-top: 3px solid #d2d6de;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.box.box-primary {
  border-top-color: #48B0F7;
}
.box.box-info {
  border-top-color: #48b0f7;
}
.box.box-danger {
  border-top-color: #f55753;
}
.box.box-warning {
  border-top-color: #f39c12;
}
.box.box-success {
  border-top-color: #10cfbd;
}
.box.box-default {
  border-top-color: #d2d6de;
}
.box.collapsed-box .box-body,
.box.collapsed-box .box-footer {
  display: none;
}
.box .nav-stacked > li {
  border-bottom: 1px solid #f4f4f4;
  margin: 0;
}
.box .nav-stacked > li:last-of-type {
  border-bottom: none;
}
.box.height-control .box-body {
  max-height: 300px;
  overflow: auto;
}
.box .border-right {
  border-right: 1px solid #f4f4f4;
}
.box .border-left {
  border-left: 1px solid #f4f4f4;
}
.box.box-solid {
  border-top: 0;
}
.box.box-solid > .box-header .btn.btn-default {
  background: transparent;
}
.box.box-solid > .box-header .btn:hover,
.box.box-solid > .box-header a:hover {
  background: rgba(0, 0, 0, 0.1);
}
.box.box-solid.box-default {
  border: 1px solid #d2d6de;
}
.box.box-solid.box-default > .box-header {
  color: #444;
  background: #d2d6de;
  background-color: #d2d6de;
}
.box.box-solid.box-default > .box-header a,
.box.box-solid.box-default > .box-header .btn {
  color: #444;
}
.box.box-solid.box-primary {
  border: 1px solid #48B0F7;
}
.box.box-solid.box-primary > .box-header {
  color: #fff;
  background: #48B0F7;
  background-color: #48B0F7;
}
.box.box-solid.box-primary > .box-header a,
.box.box-solid.box-primary > .box-header .btn {
  color: #fff;
}
.box.box-solid.box-info {
  border: 1px solid #48b0f7;
}
.box.box-solid.box-info > .box-header {
  color: #fff;
  background: #48b0f7;
  background-color: #48b0f7;
}
.box.box-solid.box-info > .box-header a,
.box.box-solid.box-info > .box-header .btn {
  color: #fff;
}
.box.box-solid.box-danger {
  border: 1px solid #f55753;
}
.box.box-solid.box-danger > .box-header {
  color: #fff;
  background: #f55753;
  background-color: #f55753;
}
.box.box-solid.box-danger > .box-header a,
.box.box-solid.box-danger > .box-header .btn {
  color: #fff;
}
.box.box-solid.box-warning {
  border: 1px solid #f39c12;
}
.box.box-solid.box-warning > .box-header {
  color: #fff;
  background: #f39c12;
  background-color: #f39c12;
}
.box.box-solid.box-warning > .box-header a,
.box.box-solid.box-warning > .box-header .btn {
  color: #fff;
}
.box.box-solid.box-success {
  border: 1px solid #10cfbd;
}
.box.box-solid.box-success > .box-header {
  color: #fff;
  background: #10cfbd;
  background-color: #10cfbd;
}
.box.box-solid.box-success > .box-header a,
.box.box-solid.box-success > .box-header .btn {
  color: #fff;
}
.box.box-solid > .box-header > .box-tools .btn {
  border: 0;
  box-shadow: none;
}
.box.box-solid[class*='bg'] > .box-header {
  color: #fff;
}
.box .box-group > .box {
  margin-bottom: 5px;
}
.box .knob-label {
  text-align: center;
  color: #333;
  font-weight: 100;
  font-size: 12px;
  margin-bottom: 0.3em;
}
.box > .overlay,
.overlay-wrapper > .overlay,
.box > .loading-img,
.overlay-wrapper > .loading-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.box .overlay,
.overlay-wrapper .overlay {
  z-index: 50;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 3px;
}
.box .overlay > .fa,
.overlay-wrapper .overlay > .fa {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -15px;
  margin-top: -15px;
  color: #000;
  font-size: 30px;
}
.box .overlay.dark,
.overlay-wrapper .overlay.dark {
  background: rgba(0, 0, 0, 0.5);
}
.box-header:before,
.box-body:before,
.box-footer:before,
.box-header:after,
.box-body:after,
.box-footer:after {
  content: " ";
  display: table;
}
.box-header:after,
.box-body:after,
.box-footer:after {
  clear: both;
}
.box-header {
  color: #444;
  display: block;
  padding: 10px;
  position: relative;
}
.box-header.with-border {
  border-bottom: 1px solid #f4f4f4;
}
.collapsed-box .box-header.with-border {
  border-bottom: none;
}
.box-header > .fa,
.box-header > .glyphicon,
.box-header > .ion,
.box-header .box-title {
  display: inline-block;
  font-size: 18px;
  margin: 0;
  line-height: 1;
}
.box-header > .fa,
.box-header > .glyphicon,
.box-header > .ion {
  margin-right: 5px;
}
.box-header > .box-tools {
  position: absolute;
  right: 10px;
  top: 5px;
}
.box-header > .box-tools [data-toggle="tooltip"] {
  position: relative;
}
.box-header > .box-tools.pull-right .dropdown-menu {
  right: 0;
  left: auto;
}
.btn-box-tool {
  padding: 5px;
  font-size: 12px;
  background: transparent;
  color: #97a0b3;
}
.open .btn-box-tool,
.btn-box-tool:hover {
  color: #606c84;
}
.btn-box-tool.btn:active {
  box-shadow: none;
}
.box-body {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 10px;
}
.no-header .box-body {
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.box-body > .table {
  margin-bottom: 0;
}
.box-body .fc {
  margin-top: 5px;
}
.box-body .full-width-chart {
  margin: -19px;
}
.box-body.no-padding .full-width-chart {
  margin: -9px;
}
.box-body .box-pane {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 3px;
}
.box-body .box-pane-right {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 0;
}
.box-footer {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-top: 1px solid #f4f4f4;
  padding: 10px;
  background-color: #fff;
}
.chart-legend {
  margin: 10px 0;
}
@media (max-width: 991px) {
  .chart-legend > li {
    float: left;
    margin-right: 10px;
  }
}
.box-comments {
  background: #f7f7f7;
}
.box-comments .box-comment {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}
.box-comments .box-comment:before,
.box-comments .box-comment:after {
  content: " ";
  display: table;
}
.box-comments .box-comment:after {
  clear: both;
}
.box-comments .box-comment:last-of-type {
  border-bottom: 0;
}
.box-comments .box-comment:first-of-type {
  padding-top: 0;
}
.box-comments .box-comment img {
  float: left;
}
.box-comments .comment-text {
  margin-left: 40px;
  color: #555;
}
.box-comments .username {
  color: #444;
  display: block;
  font-weight: 600;
}
.box-comments .text-muted {
  font-weight: 400;
  font-size: 12px;
}
/*
 * Page: Profile
 * -------------
 */
.profile-user-img {
  margin: 0 auto;
  width: 100px;
  padding: 3px;
  border: 3px solid #d2d6de;
}
.profile-username {
  font-size: 21px;
  margin-top: 5px;
}
.post {
  border-bottom: 1px solid #d2d6de;
  margin-bottom: 15px;
  padding-bottom: 15px;
  color: #666;
}
.post:last-of-type {
  border-bottom: 0;
  margin-bottom: 0;
  padding-bottom: 0;
}
.post .user-block {
  margin-bottom: 15px;
}
/* ---- new Profile By LaravelVueAdmin ---- */
.box.profile {
  display: table;
  table-layout: fixed;
  border-spacing: 0;
  width: 100%;
  border: 0px;
  background: transparent;
  margin: 0px;
  box-shadow: none;
}
.box.profile.b-t {
  border-top: solid 1px;
  border-color: rgba(0, 0, 0, 0.1);
}
.box.profile .box-content {
  display: table-cell;
  vertical-align: top;
  height: 100%;
  float: none;
  box-shadow: none;
}
.cover-widget .b-t,
.cover-widget .b-r {
  border-color: rgba(0, 0, 0, 0.1);
}
.cover-widget h1 {
  margin: 0;
}
.file-upload {
  position: relative;
  overflow: hidden;
  margin: 10px;
}
.file-upload input.upload {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
}
/* ============================= Page: Profile Design 2 ============================= */
.profile2 .profile-image {
  border-radius: 50%;
  margin-top: 20px;
  width: 70px;
  height: 70px;
  float: left;
}
.profile2 .profile-icon {
  border-radius: 50%;
  margin-top: 20px;
  width: 70px;
  height: 70px;
  float: left;
  background: #FFF;
  text-align: center;
  text-shadow: 1px 1px 6px #48b0f7;
}
.profile2 .profile-icon i {
  font-size: 42px;
  margin-top: 14px;
  text-align: center;
}
.profile2 .name {
  display: block;
  width: 100%;
  margin-top: 30px;
  font-weight: bold;
}
.profile2 .desc {
  margin-top: 6px;
}
.profile2 .row.stats {
  display: block;
}
.profile2 .row.stats .stat {
  font-size: 18px;
}
.profile2 .row.stats .stat i {
  font-size: 18px;
  width: 15px;
  text-align: center;
  margin-right: 3px;
}
.profile2 .dats1 {
  padding: 6px 10px;
  font-size: 16px;
}
.profile2 .dats1 i.fa {
  width: 20px;
  text-align: center;
  margin-right: 3px;
}
.profile2 .label2 {
  display: inline-block;
  padding: 0px 7px 1px 7px;
  background: #FFF;
  color: #7D7D7D;
  font-size: 14px;
  border-radius: 3px;
  margin-left: 3px;
  cursor: pointer;
}
.profile2 .label2.danger {
  background: #f55753;
  color: #FFF;
}
.profile2 .label2.success {
  background: #10cfbd;
  color: #FFF;
}
.profile2 .teamview {
  display: block;
  text-align: center;
  padding: 9px;
}
.profile2 .teamview .face {
  display: inline-block;
  max-height: 40px;
}
.profile2 .teamview .face img {
  width: 37px;
  height: 37px;
  border-radius: 50%;
  margin-right: 3px;
  margin-bottom: 7px;
  border: 1px solid #FFF;
}
.profile2 .teamview .face i.status-online {
  width: 12px;
  height: 12px;
  display: block;
  position: absolute;
  margin-top: -21px;
  margin-left: 27px;
  background: #10c469;
  border: solid 1px #FFF;
  border-radius: 50%;
}
.profile2 .dats1.pb {
  padding: 3px 10px;
}
.profile2 .dats1.pb .progress {
  margin-bottom: 0px;
}
.profile2 .dats1.pb .clearfix span,
.profile2 .dats1.pb .content span {
  font-size: 12px;
}
.profile2 .actions {
  text-align: center;
  padding: 18px;
}
.profile2 .actions .btn {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 16px;
  padding-top: 3px;
  text-align: center;
  margin-bottom: 5px;
  border: 0px;
  transition: all .3s ease;
}
.profile2 .actions .btn.btn-edit {
  color: #48B0F7;
}
.profile2 .actions .btn.btn-edit:hover {
  background: #48B0F7;
  color: #FFF;
}
.profile2 .actions .btn.btn-delete {
  padding-top: 1px;
  color: #f55753;
  font-size: 17px;
  margin-left: 0;
  padding-left: 4px;
}
.profile2 .actions .btn.btn-delete:hover {
  background: #f55753;
  color: #FFF;
}
/* ============================= Page: Profile Design 2 - Info List ============================= */
.panel.infolist .form-group {
  border-bottom: 1px dashed #e2e4e8;
  padding-bottom: 9px;
  min-height: 35px;
  display: block;
  height: auto;
  overflow-y: auto;
}
.panel.infolist .form-group .fvalue {
  padding: 0px 10px 5px 10px;
}
.panel.infolist .form-group:last-child {
  border-bottom: 0px;
  margin-bottom: 0px;
  padding-bottom: 0px;
}
.panel.infolist .form-group:first-child {
  margin-top: 10px;
}
/*
 * Component: Progress Bar
 * -----------------------
 */
.progress,
.progress > .progress-bar {
  box-shadow: none;
}
.progress,
.progress > .progress-bar,
.progress .progress-bar,
.progress > .progress-bar .progress-bar {
  border-radius: 1px;
}
/* size variation */
.progress.sm,
.progress-sm {
  height: 10px;
}
.progress.sm,
.progress-sm,
.progress.sm .progress-bar,
.progress-sm .progress-bar {
  border-radius: 1px;
}
.progress.xs,
.progress-xs {
  height: 7px;
}
.progress.xs,
.progress-xs,
.progress.xs .progress-bar,
.progress-xs .progress-bar {
  border-radius: 1px;
}
.progress.xxs,
.progress-xxs {
  height: 3px;
}
.progress.xxs,
.progress-xxs,
.progress.xxs .progress-bar,
.progress-xxs .progress-bar {
  border-radius: 1px;
}
/* Vertical bars */
.progress.vertical {
  position: relative;
  width: 30px;
  height: 200px;
  display: inline-block;
  margin-right: 10px;
}
.progress.vertical > .progress-bar {
  width: 100%;
  position: absolute;
  bottom: 0;
}
.progress.vertical.sm,
.progress.vertical.progress-sm {
  width: 20px;
}
.progress.vertical.xs,
.progress.vertical.progress-xs {
  width: 10px;
}
.progress.vertical.xxs,
.progress.vertical.progress-xxs {
  width: 3px;
}
.progress-group .progress-text {
  font-weight: 600;
}
.progress-group .progress-number {
  float: right;
}
/* Remove margins from progress bars when put in a table */
.table tr > td .progress {
  margin: 0;
}
.progress-bar-light-blue,
.progress-bar-primary {
  background-color: #48B0F7;
}
.progress-striped .progress-bar-light-blue,
.progress-striped .progress-bar-primary {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-green,
.progress-bar-success {
  background-color: #10cfbd;
}
.progress-striped .progress-bar-green,
.progress-striped .progress-bar-success {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-aqua,
.progress-bar-info {
  background-color: #48b0f7;
}
.progress-striped .progress-bar-aqua,
.progress-striped .progress-bar-info {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-yellow,
.progress-bar-warning {
  background-color: #f39c12;
}
.progress-striped .progress-bar-yellow,
.progress-striped .progress-bar-warning {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-red,
.progress-bar-danger {
  background-color: #f55753;
}
.progress-striped .progress-bar-red,
.progress-striped .progress-bar-danger {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
/*!
 * Font Awesome Icon Picker
 * http://mjolnic.github.io/fontawesome-iconpicker/
 *
 * Originally written by (c) 2014 Javier Aguilar @mjolnic
 * Licensed under the MIT License
 * https://github.com/mjolnic/fontawesome-iconpicker/blob/master/LICENSE
 *
 */
.iconpicker-popover.popover {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  max-width: none;
  padding: 1px;
  text-align: left;
  width: 216px;
  background: #f7f7f7;
}
.iconpicker-popover.popover.top,
.iconpicker-popover.popover.topLeftCorner,
.iconpicker-popover.popover.topLeft,
.iconpicker-popover.popover.topRight,
.iconpicker-popover.popover.topRightCorner {
  margin-top: -10px;
}
.iconpicker-popover.popover.right,
.iconpicker-popover.popover.rightTop,
.iconpicker-popover.popover.rightBottom {
  margin-left: 10px;
}
.iconpicker-popover.popover.bottom,
.iconpicker-popover.popover.bottomRightCorner,
.iconpicker-popover.popover.bottomRight,
.iconpicker-popover.popover.bottomLeft,
.iconpicker-popover.popover.bottomLeftCorner {
  margin-top: 10px;
}
.iconpicker-popover.popover.left,
.iconpicker-popover.popover.leftBottom,
.iconpicker-popover.popover.leftTop {
  margin-left: -10px;
}
.iconpicker-popover.popover.inline {
  margin: 0 0 12px 0;
  position: relative;
  display: inline-block;
  opacity: 1;
  top: auto;
  left: auto;
  bottom: auto;
  right: auto;
  max-width: 100%;
  box-shadow: none;
  z-index: auto;
  vertical-align: top;
}
.iconpicker-popover.popover.inline > .arrow {
  display: none;
}
.dropdown-menu .iconpicker-popover.inline {
  margin: 0;
  border: none;
}
.dropdown-menu.iconpicker-container {
  padding: 0;
}
.iconpicker-popover.popover .popover-title {
  padding: 12px;
  font-size: 13px;
  line-height: 15px;
  border-bottom: 1px solid #ebebeb;
  background-color: #f7f7f7;
}
.iconpicker-popover.popover .popover-title input[type=search].iconpicker-search {
  margin: 0 0 2px 0;
}
.iconpicker-popover.popover .popover-title-text ~ input[type=search].iconpicker-search {
  margin-top: 12px;
}
.iconpicker-popover.popover .popover-content {
  padding: 0px;
  text-align: center;
}
.iconpicker-popover .popover-footer {
  float: none;
  clear: both;
  padding: 12px;
  text-align: right;
  margin: 0;
  border-top: 1px solid #ebebeb;
  background-color: #f7f7f7;
}
.iconpicker-popover .popover-footer:before,
.iconpicker-popover .popover-footer:after {
  content: " ";
  display: table;
}
.iconpicker-popover .popover-footer:after {
  clear: both;
}
.iconpicker-popover .popover-footer .iconpicker-btn {
  margin-left: 10px;
}
.iconpicker-popover .popover-footer input[type=search].iconpicker-search {
  margin-bottom: 12px;
}
.iconpicker-popover.popover > .arrow,
.iconpicker-popover.popover > .arrow:after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.iconpicker-popover.popover > .arrow {
  border-width: 11px;
}
.iconpicker-popover.popover > .arrow:after {
  border-width: 10px;
  content: "";
}
.iconpicker-popover.popover.top > .arrow,
.iconpicker-popover.popover.topLeft > .arrow,
.iconpicker-popover.popover.topRight > .arrow {
  left: 50%;
  margin-left: -11px;
  border-bottom-width: 0;
  border-top-color: #999;
  border-top-color: rgba(0, 0, 0, 0.25);
  bottom: -11px;
}
.iconpicker-popover.popover.top > .arrow:after,
.iconpicker-popover.popover.topLeft > .arrow:after,
.iconpicker-popover.popover.topRight > .arrow:after {
  content: " ";
  bottom: 1px;
  margin-left: -10px;
  border-bottom-width: 0;
  border-top-color: #fff;
}
.iconpicker-popover.popover.topLeft > .arrow {
  left: 8px;
  margin-left: 0;
}
.iconpicker-popover.popover.topRight > .arrow {
  left: auto;
  right: 8px;
  margin-left: 0;
}
.iconpicker-popover.popover.right > .arrow,
.iconpicker-popover.popover.rightTop > .arrow,
.iconpicker-popover.popover.rightBottom > .arrow {
  top: 50%;
  left: -11px;
  margin-top: -11px;
  border-left-width: 0;
  border-right-color: #999;
  border-right-color: rgba(0, 0, 0, 0.25);
}
.iconpicker-popover.popover.right > .arrow:after,
.iconpicker-popover.popover.rightTop > .arrow:after,
.iconpicker-popover.popover.rightBottom > .arrow:after {
  content: " ";
  left: 1px;
  bottom: -10px;
  border-left-width: 0;
  border-right-color: #fff;
}
.iconpicker-popover.popover.rightTop > .arrow {
  top: auto;
  bottom: 8px;
  margin-top: 0;
}
.iconpicker-popover.popover.rightBottom > .arrow {
  top: 8px;
  margin-top: 0;
}
.iconpicker-popover.popover.bottom > .arrow,
.iconpicker-popover.popover.bottomRight > .arrow,
.iconpicker-popover.popover.bottomLeft > .arrow {
  left: 50%;
  margin-left: -11px;
  border-top-width: 0;
  border-bottom-color: #999;
  border-bottom-color: rgba(0, 0, 0, 0.25);
  top: -11px;
}
.iconpicker-popover.popover.bottom > .arrow:after,
.iconpicker-popover.popover.bottomRight > .arrow:after,
.iconpicker-popover.popover.bottomLeft > .arrow:after {
  content: " ";
  top: 1px;
  margin-left: -10px;
  border-top-width: 0;
  border-bottom-color: #fff;
}
.iconpicker-popover.popover.bottomLeft > .arrow {
  left: 8px;
  margin-left: 0;
}
.iconpicker-popover.popover.bottomRight > .arrow {
  left: auto;
  right: 8px;
  margin-left: 0;
}
.iconpicker-popover.popover.left > .arrow,
.iconpicker-popover.popover.leftBottom > .arrow,
.iconpicker-popover.popover.leftTop > .arrow {
  top: 50%;
  right: -11px;
  margin-top: -11px;
  border-right-width: 0;
  border-left-color: #999;
  border-left-color: rgba(0, 0, 0, 0.25);
}
.iconpicker-popover.popover.left > .arrow:after,
.iconpicker-popover.popover.leftBottom > .arrow:after,
.iconpicker-popover.popover.leftTop > .arrow:after {
  content: " ";
  right: 1px;
  border-right-width: 0;
  border-left-color: #fff;
  bottom: -10px;
}
.iconpicker-popover.popover.leftBottom > .arrow {
  top: 8px;
  margin-top: 0;
}
.iconpicker-popover.popover.leftTop > .arrow {
  top: auto;
  bottom: 8px;
  margin-top: 0;
}
.iconpicker {
  position: relative;
  text-align: left;
  text-shadow: none;
  line-height: 0;
  display: block;
  margin: 0;
  overflow: hidden;
}
.iconpicker * {
  box-sizing: content-box;
  position: relative;
}
.iconpicker:before,
.iconpicker:after {
  content: " ";
  display: table;
}
.iconpicker:after {
  clear: both;
}
.iconpicker .iconpicker-items {
  position: relative;
  clear: both;
  float: none;
  padding: 12px 0 0 12px;
  background: #fff;
  margin: 0;
  overflow: hidden;
  overflow-y: auto;
  min-height: 49px;
  max-height: 246px;
}
.iconpicker .iconpicker-items:before,
.iconpicker .iconpicker-items:after {
  content: " ";
  display: table;
}
.iconpicker .iconpicker-items:after {
  clear: both;
}
.iconpicker .iconpicker-item {
  float: left;
  width: 14px;
  height: 14px;
  padding: 12px;
  margin: 0 12px 12px 0;
  text-align: center;
  cursor: pointer;
  border-radius: 3px;
  font-size: 14px;
  box-shadow: 0 0 0 1px #ddd;
  color: inherit;
}
.iconpicker .iconpicker-item:hover:not(.iconpicker-selected) {
  background-color: #eee;
}
.iconpicker .iconpicker-item.iconpicker-selected {
  box-shadow: none;
  color: #fff;
}
.iconpicker-component {
  cursor: pointer;
}
/* =================== Menu Nestable =================== */
/**
 * Nestable Core
 */
.dd {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  max-width: 600px;
  list-style: none;
  font-size: 13px;
  line-height: 20px;
}
.dd-list {
  display: block;
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
}
.dd-list .dd-list {
  padding-left: 30px;
}
.dd-collapsed .dd-list {
  display: none;
}
.dd-item,
.dd-empty,
.dd-placeholder {
  display: block;
  position: relative;
  margin: 0;
  padding: 0;
  min-height: 20px;
  font-size: 13px;
  line-height: 20px;
}
.dd-handle {
  display: block;
  height: 30px;
  max-width: 200px;
  margin: 5px 0;
  padding: 5px 10px;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  border: 1px solid #ccc;
  background: #fafafa;
  background: linear-gradient(top, #fafafa 0%, #eee 100%);
  border-radius: 3px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.dd-handle:hover {
  color: #2ea8e5;
  background: #fff;
}
.dd-item > button {
  display: block;
  position: relative;
  cursor: pointer;
  float: left;
  width: 25px;
  height: 20px;
  margin: 5px 0;
  padding: 0;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
  border: 0;
  background: transparent;
  font-size: 12px;
  line-height: 1;
  text-align: center;
  font-weight: bold;
}
.dd-item > button:before {
  content: '+';
  display: block;
  position: absolute;
  width: 100%;
  text-align: center;
  text-indent: 0;
}
.dd-item > button[data-action="collapse"]:before {
  content: '-';
}
.dd-placeholder,
.dd-empty {
  margin: 5px 0;
  padding: 0;
  min-height: 30px;
  background: #f2fbff;
  border: 1px dashed #b6bcbf;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.dd-empty {
  border: 1px dashed #bbb;
  min-height: 100px;
  background-color: #e5e5e5;
  background-image: linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff);
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
}
.dd-dragel {
  position: absolute;
  pointer-events: none;
  z-index: 9999;
}
.dd-dragel > .dd-item .dd-handle {
  margin-top: 0;
}
.dd-dragel .dd-handle {
  box-shadow: 2px 4px 6px 0 rgba(0, 0, 0, 0.1);
}
/**
 * Nestable Draggable Handles
 */
.dd3-content {
  display: block;
  max-width: 250px;
  height: 30px;
  margin: 5px 0;
  padding: 5px 5px 5px 40px;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  border: 1px solid #ccc;
  background: #fafafa;
  background: linear-gradient(top, #fafafa 0%, #eee 100%);
  border-radius: 3px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.dd3-content i.fa {
  width: 15px;
  text-align: center;
  margin-right: 3px;
}
.dd3-content .btn {
  display: none;
  padding: 0px 4px;
  padding-right: 0px;
  margin-left: 3px;
  margin-top: -1px;
}
.dd3-content:hover {
  color: #2ea8e5;
  background: #fff;
}
.dd3-content:hover .btn {
  display: inline-block;
}
.dd-dragel > .dd3-item > .dd3-content {
  margin: 0;
}
.dd3-item > button {
  margin-left: 30px;
}
.dd3-handle {
  position: absolute;
  margin: 0;
  left: 0;
  top: 0;
  cursor: pointer;
  width: 30px;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
  border: 1px solid #aaa;
  background: #ddd;
  background: linear-gradient(top, #ddd 0%, #bbb 100%);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.dd3-handle:before {
  content: '≡';
  display: block;
  position: absolute;
  left: 0;
  top: 3px;
  width: 100%;
  text-align: center;
  text-indent: 0;
  color: #fff;
  font-size: 20px;
  font-weight: normal;
}
.dd3-handle:hover {
  background: #ddd;
}
/**
 * LaravelVueAdmin Customizations
 */
#menu-nestable button[data-action=collapse] {
  display: none;
}
/* ================= Toggle Switch - Checkbox ================= */
.Switch {
  position: relative;
  display: inline-block;
  font-size: 1.6em;
  font-weight: bold;
  color: #ccc;
  text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.8);
  height: 22px;
  padding: 6px 6px 5px 6px;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background: #ececec;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1), inset 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 16px;
}
body.IE7 .Switch {
  width: 78px;
}
.Switch span {
  display: inline-block;
  width: 35px;
}
.Switch span.On {
  color: #33d2da;
}
.Switch .Toggle {
  position: absolute;
  top: 1px;
  width: 37px;
  height: 25px;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  background: #fff;
  background: linear-gradient(top, #ececec 0%, #ffffff 100%);
  box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.5);
  z-index: 999;
  -webkit-transition: all 0.15s ease-in-out;
  -moz-transition: all 0.15s ease-in-out;
  -o-transition: all 0.15s ease-in-out;
  -ms-transition: all 0.15s ease-in-out;
}
.Switch.On .Toggle {
  left: 2%;
}
.Switch.Off .Toggle {
  left: 54%;
}
/* Round Switch */
.Switch.Round {
  padding: 0px 26px;
  border-radius: 40px;
}
body.IE7 .Switch.Round {
  width: 1px;
}
.Switch.Round .Toggle {
  border-radius: 40px;
  width: 18px;
  height: 18px;
}
.Switch.Round.Off .Toggle {
  left: 1px;
  background: #4CAF50;
}
.Switch.Round.On .Toggle {
  left: 63%;
}
    /* =================== Uploads =================== */
    #fm_dropzone_main {
      border: 1px dashed #0087F7;
      border-radius: 5px;
      background: white;
      text-align: center;
      margin-top: 15px;
      margin-bottom: 15px;
      /*min-height: 100px;*/
      padding: 8px;
      vertical-align: middle;
      cursor: pointer;
    }
    #fm_dropzone_main div.dz-message {
      display: block;
      padding: 20px 0px;
      color: #999;
    }
    #fm_dropzone_main div.dz-message i.fa {
      font-size: 40px;
    }
    #fm_dropzone_main #closeDZ1 {
      display: block;
      position: relative;
      width: 10px;
      float: right;
      margin-top: -2px;
      margin-right: 2px;
    }
    ul.files_container {
      list-style: none;
      padding: 10px;
      margin: 0px;
      display: inline-block;
      height: 100%;
      width: 100%;
      min-height: 300px;
      overflow: scroll;
    }
    ul.files_container li {
      display: inline-block;
      max-width: 130px;
      height: 130px;
      width: 130px;
      float: left;
      margin-bottom: 5px;
      margin-right: 5px;
      overflow: hidden;
      border: solid 1px #EEE;
    }
    ul.files_container li a {
      display: block;
      height: 100%;
      cursor: pointer;
    }
    ul.files_container li a img {
      height: 128px;
      display: block;
      transform: translateX(-50%);
      margin-left: 50%;
    }
    ul.files_container li a i.fa {
      height: 128px;
      width: 128px;
      font-size: 96px;
      text-align: center;
      padding-top: 13px;
    }
    ul.files_container li:hover {
      border-color: #48B0F7;
    }
    #EditFileModal .modal-header {
      padding: 0px;
      border-bottom-color: #ddd;
    }
    #EditFileModal .modal-header h4.modal-title {
      padding: 13px 15px;
    }
    #EditFileModal .modal-header button {
      float: right;
      padding: 15px;
      background: #FFF;
      border: 0px;
      border-left: solid 1px #ddd;
      text-align: center;
      width: 50px;
      height: 51px;
      margin-top: 0px;
      font-size: 17px;
      color: #d6d6d6;
      opacity: 1;
    }
    #EditFileModal .modal-header button:hover {
      color: #bbb;
      background: #EEE;
    }
    #EditFileModal .modal-footer {
      border-top-color: #ddd;
    }
    #EditFileModal .file-info-form {
      padding: 10px;
      height: 330px;
      background: #f3f3f3;
      border-left: solid 1px #ddd;
    }
    #EditFileModal .file-info-form label {
      color: #666;
      font-weight: normal;
    }
    #EditFileModal .col-xs-8,
    #EditFileModal .col-xs-4 {
      padding: 0px;
    }
    #EditFileModal .fileObject {
      text-align: center;
      padding: 15px 0px;
    }
    #EditFileModal .fileObject img {
      max-width: 100%;
      max-height: 300px;
    }
    /* =================== File Browser + Uploader =================== */
    .input-group.file .input-group-addon {
      cursor: pointer;
    }
    .input-group-addon.preview {
      display: none;
      cursor: pointer;
      padding: 0px;
      width: 34px;
      height: 34px;
      border-left: 0px;
      background-size: cover;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      position: absolute;
      right: 40px;
      z-index: 10;
    }
    #fm .col-md-3 {
      border-right: solid 1px #F4F4F4;
    }
    #fm .fm_folder_selector {
      padding: 15px 0px;
      min-height: 341px;
    }
    #fm .fm_folder_selector .fm_folder_title {
      display: block;
      padding: 4px 15px;
      color: #777;
      font-weight: 100;
    }
    #fm .fm_folder_selector .fm_folder_sel {
      display: block;
      padding: 4px 15px;
      color: #666;
      max-width: 120px;
      cursor: pointer;
    }
    #fm .fm_folder_selector .fm_folder_sel:hover {
      color: #48B0F7;
    }
    #fm .fm_folder_selector .fm_folder_sel.selected {
      border: solid 1px #EEE;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      background: #EEE;
    }
    #fm .fm_folder_selector form#fm_dropzone {
      border: 1px dashed #0087F7;
      border-radius: 5px;
      background: white;
      text-align: center;
      margin-left: 15px;
      margin-top: 15px;
      min-height: 200px;
      padding: 8px;
      vertical-align: middle;
      cursor: pointer;
    }
    #fm .fm_folder_selector form#fm_dropzone div.dz-message {
      display: block;
      padding: 51px 0px;
      color: #999;
    }
    #fm .fm_folder_selector form#fm_dropzone div.dz-message i.fa {
      font-size: 40px;
    }
    #fm .nav {
      background: #EEE;
    }
    #fm .nav input[type=search] {
      padding: 5px;
      line-height: 12px;
      height: 28px;
      margin: 4px 5px;
      border-color: #EEE;
      border-radius: 3px;
      font-weight: 400;
    }
    #fm .fm_file_selector ul {
      list-style: none;
      padding: 10px;
      margin: 0px;
      display: inline-block;
      height: 100%;
      width: 100%;
      min-height: 300px;
      overflow: scroll;
    }
    #fm .fm_file_selector ul li {
      display: inline-block;
      max-width: 104px;
      max-height: 104px;
      min-height: 104px;
      float: left;
      margin-bottom: 5px;
      margin-right: 5px;
      overflow: hidden;
      border: solid 1px #EEE;
    }
    #fm .fm_file_selector ul li a {
      display: block;
      height: 100%;
      cursor: pointer;
    }
    #fm .fm_file_selector ul li a img {
      height: 102px;
      display: block;
      transform: translateX(-50%);
      margin-left: 50%;
    }
    #fm .fm_file_selector ul li a i.fa {
      height: 102px;
      width: 102px;
      font-size: 96px;
      text-align: center;
      padding-top: 3px;
    }
    #fm .fm_file_selector ul li:hover {
      border-color: #48B0F7;
    }
    /* =================== Upload in Form =================== */
    a.btn_upload_file,
    a.btn_upload_image {
      margin-top: 10px;
      border-radius: 3px;
      border: solid 1px #ccc;
      background: #FFF;
    }
    a.btn_upload_file i.fa,
    a.btn_upload_image i.fa {
      margin-left: 3px;
    }
    a.btn_upload_file:hover,
    a.btn_upload_image:hover {
      background: #EEE;
    }
    div.uploaded_image {
      display: inline-block;
      position: relative;
      margin-top: 7px;
    }
    div.uploaded_image img {
      max-width: 120px;
      border-radius: 3px;
    }
    div.uploaded_image i.fa {
      background: rgba(0, 0, 0, 0.65);
      display: block;
      position: absolute;
      top: -6px;
      right: -6px;
      color: #FFF;
      padding: 2px 2px;
      border-radius: 50%;
      text-align: center;
      width: 15px;
      height: 15px;
      font-size: 11px;
      cursor: pointer;
    }
    a.uploaded_file {
      display: inline-block;
      position: relative;
      margin-top: 7px;
      vertical-align: top;
      margin-right: 10px;
    }
    a.uploaded_file i.fa.fa-file-o {
      font-size: 90px;
    }
    a.uploaded_file i.fa.fa-times {
      background: #f10000;
      display: block;
      position: absolute;
      top: -6px;
      right: -6px;
      color: #FFF;
      padding: 2px 2px;
      border-radius: 50%;
      text-align: center;
      width: 15px;
      height: 15px;
      font-size: 11px;
      cursor: pointer;
    }
    a.uploaded_file2 {
      display: inline-block;
      position: relative;
      margin-top: 7px;
      vertical-align: top;
      margin-right: 10px;
    }
    a.uploaded_file2 i.fa.fa-file-o {
      font-size: 90px;
    }
    a.uploaded_file2 i.fa.fa-times {
      background: #f10000;
      display: block;
      position: absolute;
      top: -6px;
      right: -6px;
      color: #FFF;
      padding: 2px 2px;
      border-radius: 50%;
      text-align: center;
      width: 15px;
      height: 15px;
      font-size: 11px;
      cursor: pointer;
    }
    /*
     * Misc: print
     * -----------
     */
    @media print {
      .no-print,
      .main-sidebar,
      .left-side,
      .main-header,
      .content-header {
        display: none !important;
      }
      .content-wrapper,
      .right-side,
      .main-footer {
        margin-left: 0 !important;
        min-height: 0 !important;
        transform: translate(0, 0) !important;
      }
      .fixed .content-wrapper,
      .fixed .right-side {
        padding-top: 0 !important;
      }
      .invoice {
        width: 100%;
        border: 0;
        margin: 0;
        padding: 0;
      }
      .invoice-col {
        float: left;
        width: 33.3333333%;
      }
      .table-responsive {
        overflow: auto;
      }
      .table-responsive > .table tr th,
      .table-responsive > .table tr td {
        white-space: normal !important;
      }
    }
    </style>
    @stack('styles')
    
</head>
