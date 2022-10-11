<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\User;


class CoursesController extends Controller{


function getCourses(){
   
    $courses= Course::where('admin_id', Auth::id())->get();

    return response()->json([
        'status' => 'success',
        'data' => $courses
    ]);

    return response()->json(["status" => "Error"]);

}

function createCourse(Request $request){

    $course = Course::create([
        'admin_id' => Auth::id(),
        'code' => $request->code,
        'name' => $request->name,
        'instructor' => $request->instructor,
        'instructor_id' => $request->instructor_id,
    ]);
    
    if($course->save()) {
        return response()->json([
            "status" => "success",
            "data" => $course
        ]);
    }
    return response()->json(["status" => "error"]);
}


function addStudentToCourse(Request $request){

    $user = User::where('email', $request->email)
                ->where('admin_id',$request->admin_id)->first();
    
    if($user){

       $course = User::find('id')->first();
       $course->students[]= $user->id;
       
       if($course->save()) {
        return response()->json([
            "status" => "success",
            "data" => $course
        ]);
    }
    }
    return response()->json(["status" => "error"]);
}

function addAssignment(Request $request){
    
    $course = course::where('id', $request->id)
                ->where('instructor_id',$request->instructor_id)
                ->where('admin_id',$request->admin_id)->first();
    
    if($course){
       $course->assignments[]= ['title'=>$request->title,
                                'content'=>$request->content,
                                'due'=>$request->due
                                ];
       
       if($course->save()) {
        return response()->json([
            "status" => "success",
            "data" => $course
        ]);
    }
    }
    return response()->json(["status" => "error"]);
}

function addAnnouncement(Request $request){

    $course = course::where('id', $request->id)
                ->where('instructor_id',$request->instructor_id)
                ->where('admin_id',$request->admin_id)->first();

    if($course){
        $course->announcements[]= ['title'=>$request->title,
                                    'content'=>$request->content
                                    ];

        if($course->save()) {
            return response()->json([
            "status" => "success",
            "data" => $course
            ]);
        }
    return response()->json(["status" => "error"]);
    }
}
}