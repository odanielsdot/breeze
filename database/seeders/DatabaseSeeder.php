<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Post;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::query()->updateOrCreate([
            'name' => 'Test User',
            'email' => 'playwright@example.com',
        ], [
            'password' => Hash::make('playwright'),
            'is_admin' => true,
        ]);

        $categories = collect([
            'Technology',
            'Business',
            'Lifestyle',
        ])->map(fn(string $name) => Category::query()->firstOrCreate([
            'name' => $name,
        ]));

        $posts = [
            [
                'title' => 'AI Trends in 2026',
                'text' => 'A quick overview of AI trends that are shaping software products in 2026.',
                'category' => 'Technology',
            ],
            [
                'title' => 'Building Better Product Teams',
                'text' => 'Practical ways to improve team collaboration and shipping velocity.',
                'category' => 'Business',
            ],
            [
                'title' => 'Small Habits for Better Focus',
                'text' => 'Simple daily routines that help maintain focus and consistency.',
                'category' => 'Lifestyle',
            ],
        ];

        foreach ($posts as $postData) {
            $category = $categories->firstWhere('name', $postData['category']);

            Post::query()->firstOrCreate([
                'title' => $postData['title'],
                'category_id' => $category->id,
            ], [
                'text' => $postData['text'],
            ]);
        }
    }
}
