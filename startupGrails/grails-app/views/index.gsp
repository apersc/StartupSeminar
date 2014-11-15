<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main"/>
		<title>Analyst ranking</title>
	</head>
	<body>
	<h1>Titles<h1>
		<h2>Select a title</h2>
		<form role="form">
			<div class="form-group">
				<input class="form-control" id="searchinput" type="search" placeholder="Search..." />
			</div>
			<div id="searchlist" class="list-group">
				<a class="list-group-item" href="select_analyst.html">UBS</a>
				<a class="list-group-item" href="select_analyst.html">GOOG</a>
				<a class="list-group-item" href="select_analyst.html">AAPL</a>
			</div>
		</form>
		<asset:script type="text/javascript">
			$('#searchlist').btsListFilter('#searchinput');
		</asset:script>
	</body>
</html>
