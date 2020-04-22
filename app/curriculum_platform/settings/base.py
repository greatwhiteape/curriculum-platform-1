"""
Django settings for curriculum_platform project.

Generated by 'django-admin startproject' using Django 3.0.4.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE_DIR = os.path.dirname(PROJECT_DIR)


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/


# Application definition

INSTALLED_APPS = [
    'activity',
    'assets',
    'content',
    'home',
    'lessons',
    'modules',
    'search',
    'streams',
    'taxonomy',

    'rest_framework',
    'wagtailfontawesome',
    'corsheaders',
    'modelcluster',
    'taggit',
    'wagtailmenus',

    'wagtail.api.v2',
    'wagtail.contrib.forms',
    'wagtail.contrib.modeladmin',
    'wagtail.contrib.redirects',
    'wagtail.contrib.settings',
    'wagtail.embeds',
    'wagtail.sites',
    'wagtail.users',
    'wagtail.snippets',
    'wagtail.documents',
    'wagtail.images',
    'wagtail.search',
    'wagtail.admin',
    'wagtail.core',

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

MIDDLEWARE = [
    # Cross origin support, should be as high as possible
    "corsheaders.middleware.CorsMiddleware",
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',

    'wagtail.core.middleware.SiteMiddleware',
    'wagtail.contrib.redirects.middleware.RedirectMiddleware',
]

CORS_ORIGIN_ALLOW_ALL = True

GRAPHENE = {"SCHEMA": "api.schema.schema"}

ROOT_URLCONF = 'curriculum_platform.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(PROJECT_DIR, 'templates'),
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'wagtailmenus.context_processors.wagtailmenus',
            ],
        },
    },
]

WSGI_APPLICATION = 'curriculum_platform.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    'default':{
      'ENGINE':'django.db.backends.postgresql',
      'NAME':os.environ.get('POSTGRES_NAME'),
      'USER':os.environ.get('POSTGRES_USER'),
      'HOST':os.environ.get('POSTGRES_HOST'),
      'PASSWORD':os.environ.get('POSTGRES_PASSWORD'),
      'PORT':int(os.environ.get('POSTGRES_PORT',5432)),
      "OPTIONS":{"sslmode":"require"},
    }
}


# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',},
]


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
]

STATICFILES_DIRS = [
    os.path.join(PROJECT_DIR, 'static'),
]

# ManifestStaticFilesStorage is recommended in production, to prevent outdated
# Javascript / CSS assets being served from cache (e.g. after a Wagtail upgrade).
# See https://docs.djangoproject.com/en/3.0/ref/contrib/staticfiles/#manifeststaticfilesstorage
# STATICFILES_STORAGE = 'django.contrib.staticfiles.storage.ManifestStaticFilesStorage'

# STATIC_ROOT = os.path.join(BASE_DIR, 'static')
# STATIC_URL = '/static/'

# MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
# MEDIA_URL = '/media/'



# If AWS S3 or Digital Ocean Spaces credentials are provided, use them for media storage
AWS_STORAGE_BUCKET_NAME = os.environ.get("AWS_STORAGE_BUCKET_NAME")
AWS_S3_FILE_OVERWRITE = False

if AWS_STORAGE_BUCKET_NAME:
    AWS_HEADERS = {'Access-Control-Allow-Origin': '*'}
    AWS_ACCESS_KEY_ID = os.environ["AWS_ACCESS_KEY_ID"]
    AWS_SECRET_ACCESS_KEY = os.environ["AWS_SECRET_ACCESS_KEY"]
    AWS_S3_ENDPOINT_URL = os.environ["AWS_S3_ENDPOINT_URL"]

    # Use Cloudfront or Spaces CDN
    AWS_S3_CUSTOM_DOMAIN = os.environ.get("AWS_S3_CUSTOM_DOMAIN")
    if not AWS_S3_CUSTOM_DOMAIN:
        AWS_S3_CUSTOM_DOMAIN = AWS_S3_ENDPOINT_URL

    AWS_S3_REGION_NAME = os.environ["AWS_S3_REGION_NAME"]

    AWS_S3_OBJECT_PARAMETERS = {"CacheControl": "max-age=86400"}
    AWS_S3_SIGNATURE_VERSION = 's3v4'

    AWS_STATIC_LOCATION = "static"
    AWS_MEDIA_LOCATION = "media"
    AWS_DEFAULT_ACL = "public-read"

    STATIC_URL = 'https://%s/%s/' % (AWS_S3_CUSTOM_DOMAIN, AWS_STATIC_LOCATION)
    STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

    MEDIA_URL = 'https://%s/%s/' % (AWS_S3_CUSTOM_DOMAIN, AWS_MEDIA_LOCATION)
    DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

    # MEDIA_URL = f"{AWS_S3_CUSTOM_DOMAIN}/{AWS_LOCATION}/"
else:
    MEDIA_URL = "/media/"

# Media storage
# STATIC_URL = "/django-static/"
# STATIC_ROOT = "/static/"
# MEDIA_ROOT = "/media/"

# https://docs.djangoproject.com/en/2.1/ref/settings/#data-upload-max-memory-size
DATA_UPLOAD_MAX_MEMORY_SIZE = 1024 * 1024 * 50  # Set the max upload size to 50 mb
FILE_UPLOAD_MAX_MEMORY_SIZE = 1024 * 1024 * 50
FILE_UPLOAD_PERMISSIONS  = 0o775

# Wagtail settings

WAGTAIL_SITE_NAME = "GMRI Curriculum Platform"

# Base URL to use when referring to full URLs within the Wagtail admin backend -
# e.g. in notification emails. Don't include '/admin' or a trailing slash
BASE_URL = 'http://teach.gmri.org'

SITE_ID = 1
