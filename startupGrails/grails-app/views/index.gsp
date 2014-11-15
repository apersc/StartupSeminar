<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main"/>
		<title>Analyst ranking</title>
	</head>
	<body>
		<!-- title type chooser -->
		<div class="btn-group" data-toggle="buttons">
			<label class="btn btn-primary active">
				<input type="radio" name="options" id="option1" autocomplete="off" checked>Stock
			</label>
			<label class="btn btn-primary">
				<input type="radio" name="options" id="option2" autocomplete="off">Bond
			</label>
			<label class="btn btn-primary">
				<input type="radio" name="options" id="option3" autocomplete="off">ETF
			</label>
		</div>

		<!-- title chooser -->
		<div class="btn-group">
			<select class="form-control">
				<option value="one">UBS</option>
				<option value="two">AAPL</option>
				<option value="three">GOOG</option>
			</select>
		</div>

		<!-- analyst chooser -->
		<div class="list-group">
			<a href="#" class="list-group-item active">
				Cras justo odio
			</a>
			<a href="#" class="list-group-item">Joseph Nadol</a>
			<a href="#" class="list-group-item">David Zion</a>
			<a href="#" class="list-group-item">Ed Hyman</a>
		</div>

		<asset:script type="text/javascript">
			$('brand').click(function() {
                $.ajax(''
            });
		</asset:script>
	</body>

</html>
