<?php

declare(strict_types=1);

header('Access-Control-Allow-Origin: *');

if (isset($_GET['getCountForYear'])) {
    $year = filter_var($_GET['getCountForYear'], FILTER_VALIDATE_INT);
    echo json_encode([
        'data' => rand(
                -1000,
                $year ?: 10000 
                )
        ]
    );
}