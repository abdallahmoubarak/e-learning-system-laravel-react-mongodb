<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;


class Course extends Model
{
    protected $connection = 'mongodb';
    use HasFactory;

    protected $fillable = [
        'code',
        'name',
        'admin_id',
        'instructor_id',
        'instructor',
        'assignments',
        'students',
        'announcements',
    ];
}
