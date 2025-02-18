from rest_framework.views import APIView
from rest_framework.response import Response
from .sort import sort

class SortApiView(APIView):

	def get(self, request, *args, **kwarg):
		return Response({"status":"not implemented"})
	def post(self, request, *args, **kwarg):
		'''DATA {
			"width":10,
			"height":10,
			"length":10,
			"mass":10
		}'''
		#Validate the request data to makesure the required keys present and data in valid range >0.
		#Return 400 is invalid.
		print("****")
		print(request.data)
		stack=sort(**request.data)
		return Response({"stack":stack, "req":request.data})