<?php

namespace App\Http\Controllers;
use Jenssegers\Mongodb\Eloquent\Model;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function show($slug)
    {
        return view('post', [
            'post' => Post::where('slug', '=', $slug)->first()
        ]);
    }
 
}
