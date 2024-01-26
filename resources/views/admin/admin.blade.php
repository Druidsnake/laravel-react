<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @viteReactRefresh
    @vite('resources/css/app.css')
    @vite('resources/js/App.tsx')
</head>
<body>

    {{-- <div>admin view</div> --}}
    {{-- <form action="/logout" method="POST">
        @csrf
        <div>
            <button type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Logout
            </button>
        </div>
    </form> --}}
    <div id='react'></div>

</body>
</html>
